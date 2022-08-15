# Getting Started

1. Ensure Python is installed: https://docs.python-guide.org/starting/install3/osx/

2. Ensure pip is installed: https://www.geeksforgeeks.org/how-to-install-pip-in-macos/
- Upgrade if needed with `pip3 install --upgrade pip`

3. Install a few pip packages:
- `pip3 install selenium webdriver-manager`
- `pip3 install python-dotenv`

4. Setup environmental variables
From within the using-python directory
- `cp .env.example .env`
- Modify `.env` to add valid credentials

# How to run the `starter-test.py`
- Run the following command after navigating into the repo via Terminal
- `python3 starter-test.py`

# What does the `starter-test.py` do?
- Starts up Selenium webdriver
- Loads a salesforce dashboard page
- Enters credentials from `.env`
- Gets stuck at 2FA 
