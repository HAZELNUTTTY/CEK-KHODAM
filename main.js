import requests

def send_message_to_discord(message, webhook_url):
    data = {
        "content": message
    }
    response = requests.post(webhook_url, json=data)
    
    if response.status_code == 204:
        print("Message sent successfully")
    else:
        print(f"Failed to send message: {response.status_code}")

# Example: Use a URL to track if it's opened
def track_link_opened(url, webhook_url):
    message = f"The link {url} has been opened 1x."
    send_message_to_discord(message, webhook_url)

# Replace with your actual webhook URL
webhook_url = "https://discord.com/api/webhooks/1347471422385291276/6N2JmgOUhOl1lagxXHbXBl2FPmuV8_K-SB1AZzxsti6ov1Qolq4ntSZq1ddcyUwvSJjw"

# Example: Track a URL
track_link_opened("https://hazelnuttty.github.io/CEK-KHODAM/", webhook_url)
