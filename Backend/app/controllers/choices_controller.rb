class ChoicesController < ApplicationController
  
  require 'socket'

  def index
    
  end

  def create 
    @poll = Poll.find(params[:id])
    if @poll.choices.exists?(ip_address:Socket.ip_address_list.detect(&:ipv4_private?).ip_address)

      option_counts = @poll.choices.group(:option).count
      total_votes = @poll.choices.count

      option_percentages = {}

      option_counts.each do |option, count|
        option_percentages[option] = count
      end

      @option = @poll.choices.find_by(ip_address: Socket.ip_address_list.detect(&:ipv4_private?).ip_address)

      render json:{total_vote:@poll.choices.count, option_percent:option_percentages,option:@option}
    else
      @poll.choices.build(option:params[:value],ip_address:Socket.ip_address_list.detect(&:ipv4_private?).ip_address)
      @poll.save
      option_counts = @poll.choices.group(:option).count
      total_votes = @poll.choices.count

      option_percentages = {}

      option_counts.each do |option, count|
        option_percentages[option] = count
      end

      @option = @poll.choices.find_by(ip_address: Socket.ip_address_list.detect(&:ipv4_private?).ip_address)

      render json:{total_vote:@poll.choices.count, option_percent:option_percentages,option:@option}
    end
  end


  def check
    @poll = Poll.find(params[:id])
    puts "ip address =  #{Socket.ip_address_list.detect(&:ipv4_private?).ip_address}"
    if @poll.choices.exists?(ip_address:Socket.ip_address_list.detect(&:ipv4_private?).ip_address)

      option_counts = @poll.choices.group(:option).count
      total_votes = @poll.choices.count

      option_percentages = {}

      option_counts.each do |option, count|
        option_percentages[option] = count
      end

      @option = @poll.choices.find_by(ip_address: Socket.ip_address_list.detect(&:ipv4_private?).ip_address)
      render json:{total_vote:@poll.choices.count, option_percent:option_percentages,option:@option}
    end
  end

end
