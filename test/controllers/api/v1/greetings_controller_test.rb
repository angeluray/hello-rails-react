require 'test_helper'

class Api::V1::GreetingsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get api_v1_greetings_index_url
    assert_response :success
  end
end
