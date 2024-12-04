import streamlit as st
import requests

# TonCenter API endpoint
TONCENTER_API_URL = 'https://testnet.toncenter.com/api/v2/'
API_KEY = 'YOUR_TONCENTER_API_KEY'  # Replace with your API key

# Replace with your contract address
CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS'  # Replace with your deployed contract address

# Function to send transactions
def send_transaction(to, value, payload):
    url = f"{TONCENTER_API_URL}sendTransaction"
    headers = {"Content-Type": "application/json"}
    data = {
        "to": to,
        "value": value,
        "payload": payload,
        "workchain": 0,  # Assuming a standard workchain
        "private_key": "YOUR_PRIVATE_KEY"  # Replace with your private key
    }
    response = requests.post(url, json=data, headers=headers)
    return response.json()

# Function to get current counter value
def get_counter_value():
    url = f"{TONCENTER_API_URL}runGetMethod"
    params = {
        "address": CONTRACT_ADDRESS,
        "method": "get_counter",  # Replace with your method name
        "api_key": API_KEY
    }
    response = requests.get(url, params=params)
    return response.json()

# Streamlit app title
st.title("SimpleCounter Smart Contract Interaction")

# Input for adding to counter
st.header("Add to Counter")
amount = st.number_input("Enter amount to add:", min_value=1, step=1)
if st.button("Add"):
    result = send_transaction(
        to=CONTRACT_ADDRESS,
        value="0.1",  # Amount of TON to send (in nanograms)
        payload=f"add_to_counter:{amount}"  # Replace with your smart contract's logic
    )
    st.success(f"Added {amount} to counter. Transaction result: {result}")

# Input for setting public address
st.header("Set Public Address")
public_address = st.text_input("Enter public address:")
if st.button("Set Address"):
    result = send_transaction(
        to=CONTRACT_ADDRESS,
        value="0.1",  # Amount of TON to send (in nanograms)
        payload=f"set_public_address:{public_address}"  # Replace with your smart contract's logic
    )
    st.success(f"Set public address to {public_address}. Transaction result: {result}")

# Button to get current counter value
if st.button("Get Current Counter"):
    counter_value = get_counter_value()
    if counter_value.get("ok"):
        st.write(f"Current Counter Value: {counter_value['result']}")
    else:
        st.error(f"Error: {counter_value.get('error')}")
