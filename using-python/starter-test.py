from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
import time
import os
from dotenv import load_dotenv

load_dotenv('.env')

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get('https://oviahealthcoachingdashboard--partial.lightning.force.com/lightning/n/Inbox_Messages_List')
print('Page has loaded with title: ' + driver.title)

username_field = driver.find_element(By.ID, 'username')
ActionChains(driver).click(on_element=username_field).send_keys(os.environ['USERNAME']).perform()
time.sleep(1)

password_field = driver.find_element(By.ID, 'password')
ActionChains(driver).click(on_element=password_field).send_keys(os.environ['PASSWORD']).perform()
time.sleep(1)

login_button = driver.find_element(By.ID, 'Login')
ActionChains(driver).click(on_element = login_button).perform()
time.sleep(5)



driver.quit()

