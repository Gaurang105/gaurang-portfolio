---
title: "How to make websites spill their guts?"
date: "2024-08-23"
excerpt: "Learn powerful web scraping techniques to extract data from websites efficiently and ethically. A comprehensive guide covering BeautifulSoup, Selenium, and advanced scraping methods."
tags: ["web scraping", "python", "selenium", "beautifulsoup", "automation", "tutorial"]
---

Welcome to the world of web scraping, a powerful technique for extracting data from websites. If you're reading this, you're likely interested in learning how to efficiently collect information from the internet.

This guide is designed for those who are tired of manual data extraction or simply curious about automated data collection methods. Whether you're a beginner or have some programming experience, this article will provide valuable insights into web scraping techniques.

By the end of this guide, you'll have the skills to extract data from websites quickly and efficiently. We'll cover everything from basic concepts to more advanced techniques, giving you a comprehensive understanding of web scraping.

It's important to note that we'll focus on ethical scraping practices. Our goal is to teach you how to collect data responsibly, without causing harm to websites or violating terms of service.

So, if you're ready to dive into the world of web scraping, let's begin. This guide will take you step-by-step through the process, from setting up your environment to implementing advanced scraping techniques.

Let's get started on your journey to becoming proficient in web scraping.

### Web Scraping Basics

Let's break down the fundamental concepts of web scraping:

**Understanding HTML and Website Structure**

HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It serves as the foundation of a website's structure. HTML uses a system of tags to define the layout and content of a web page. For example:

```xml
<tag> some stuff here <tag>
```

Websites use these tags to organize various elements, including headings, paragraphs, links, and other interactive features.

**Essential Tools for Web Scraping**

1. **Python**: Python is a versatile programming language widely used in web scraping due to its simplicity and powerful libraries.
    
2. **Beautiful Soup**: This Python library is designed for pulling data out of HTML and XML files. It creates a parse tree from page source code that can be used to extract data in a hierarchical and more readable manner.
    
3. **Requests**: This is a Python HTTP library. It allows you to send HTTP/1.1 requests using Python. With it, you can add content like headers, form data, multipart files, and parameters via simple Python libraries. It's often used to retrieve the HTML content of web pages.
    

Practical Example: Scraping The New York Times

To illustrate these concepts, let's look at a basic example of scraping headlines from The New York Times website.

```python
import requests
from bs4 import BeautifulSoup

# Get the webpage
url = "https://www.nytimes.com/"
page = requests.get(url)

# Make the soup (not the kind you eat)
soup = BeautifulSoup(page.content, 'html.parser')

# Find all the headlines
headlines = soup.find_all('p', class_='indicate-hover css-91bpc3')

# Print it out
for headline in headlines:
    print(headline.text.strip())
```

Let's break down the code and explain each step of the scraping process:

1. First, we import the necessary libraries: `requests` and `BeautifulSoup`. These are essential tools for web scraping in Python. `requests` is used to send HTTP requests and retrieve web pages, while `BeautifulSoup` is used to parse and extract data from HTML content.
    
2. We use `requests.get()` to fetch the HTML content of the New York Times homepage. This function sends a GET request to the specified URL and returns the server's response.
    
3. The retrieved HTML content is then passed to `BeautifulSoup` for parsing. This creates a structured representation of the HTML that we can easily navigate and search.
    
4. We use BeautifulSoup's `find_all()` method to locate all `<p>` tags with the class 'indicate-hover css-91bpc3'. This class is specific to the headline elements on the New York Times website.
    
5. Finally, we iterate through the found elements, extract the text content of each headline, and print it. The `strip()` method is used to remove any leading or trailing whitespace, ensuring clean output.
    

When you execute this code, it will quickly display a list of current headlines from the New York Times homepage.

Important Note: Web scraping can be fragile to changes in website structure. If this code stops working, it's likely because the New York Times has updated their HTML structure or class names. In such cases, you'll need to inspect the website's current HTML and update your code accordingly.

### Advanced Scraping Techniques

Advanced Scraping Techniques: Using Selenium with BigBasket

In this section, we'll elevate our scraping skills by using Selenium to extract detailed product information from BigBasket. Our goal is to scrape the following data:

* **Category**
    
* **Sub-Category**
    
* **Sub-sub-Category**
    
* **Product Link**
    
* **EAN Code**
    
* **Product Image Link**
    
* **Product Brand**
    
* **SKU Name**
    
* **SKU Size**
    
* **MRP**
    
* **Product Description**
    

Before we begin, let's set up our environment:

1. Check your Chrome browser version:
    
    * Open Chrome and navigate to Help &gt; About Google Chrome.
        
    * Note the version number.
        
2. Download the appropriate ChromeDriver:
    
    * Visit [https://googlechromelabs.github.io/chrome-for-testing/](https://googlechromelabs.github.io/chrome-for-testing/)
        
    * Find and download the ChromeDriver that matches your Chrome version.
        
3. Set up ChromeDriver in your project:
    
    * Unzip the downloaded file.
        
    * Place the chromedriver executable in a folder named "chromedriver" within your project directory.
        
4. Prepare your development environment:
    
    * Create a new Jupyter Notebook file (scraper.ipynb) in your project folder.
        
    * We'll use this notebook to write and execute our code in a step-by-step manner.
        

Now, let's break down our scraping process into manageable steps, each corresponding to a cell in our Jupyter Notebook:

**Cell-1: Import necessary Libraries**

```python
import os
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import TimeoutException
```

Let's review the key libraries and modules we'll be using in our web scraping project:

* `os`: This module provides a way to use operating system-dependent functionality, such as reading or writing to files and manipulating file paths.
    
* `pandas`: A powerful data manipulation and analysis library. We'll use it for handling and exporting our scraped data efficiently.
    
* `BeautifulSoup`: A library for pulling data out of HTML and XML files. It provides idiomatic ways of navigating, searching, and modifying the parse tree.
    
* `webdriver`: Part of the Selenium package, this module allows us to programmatically control web browsers. It's essential for interacting with dynamic web pages.
    
* `By`: A class from Selenium that provides methods for locating elements on a web page. It supports various locator strategies such as ID, class name, XPath, and more.
    
* `WebDriverWait`: This class implements a wait strategy for Selenium WebDriver. It's useful when certain elements on a webpage are not immediately available.
    
* `expected_conditions as EC`: Used in conjunction with WebDriverWait, this module contains a set of predefined conditions to wait for before proceeding with certain operations.
    
* `Service`: This class manages the driver service for controlling the browser. It ensures that the appropriate driver executable is available and properly configured.
    

**Cell 2: Define our data-saving function**

```python
def save_data_to_excel(data, file_name):
    df = pd.DataFrame(data)
    if os.path.exists(file_name):
        existing_data = pd.read_excel(file_name)
        combined_data = pd.concat([existing_data, df], ignore_index=True)
        combined_data.to_excel(file_name, index=False)
    else:
        df.to_excel(file_name, index=False)
```

This function basically saves the scraped data into a neat excel file format.

**Cell 3: Set up our disguise and target**

```python
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
url = "https://www.bigbasket.com/pc/cleaning-household/party-festive-needs/seasonal-accessories/?nc=nb"
```

* `user_agent`: This string identifies the browser and operating system to the website. By setting a specific user agent, we ensure our requests appear to come from a standard web browser, which can help avoid detection as an automated scraper.
    
* `url`: This variable stores the target URL for our scraping operation. In this case, it's set to a specific category page on the BigBasket website. This is the starting point from which we'll extract product information.
    

**Cell 4: Prepare our stealth browser**

```python
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--incognito")
chrome_options.add_argument(f'user_agent={user_agent}')
chrome_options.add_argument("--disable-blink-features=AutomationControlled")
chrome_options.add_argument("--disable-infobars")
chrome_options.add_argument("--start-maximized")
chromedriver_path = os.path.join(os.getcwd(), 'chromedriver', 'chromedriver.exe')
service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)
driver.get(url)
wait = WebDriverWait(driver, 10)
```

In this step, we configure our WebDriver to minimize detection and maximize efficiency:

* We enable incognito mode to prevent browsing history or cookies from affecting our scraping process.
    
* We set a user agent string to mimic a standard web browser, reducing the likelihood of being identified as an automated script.
    
* We maximize the browser window to ensure all elements are visible and interactive, as they would be in a typical browsing session.
    
* We implement `WebDriverWait` with a 10-second timeout. This allows for dynamic content to load before we attempt to interact with it.
    

After executing this cell, a Chrome window will launch. At this point, manual intervention is required to scroll to the bottom of the page and ensure all products are loaded. This step is necessary because the website uses dynamic loading techniques.

Note: While this current implementation requires manual scrolling, it's possible to automate this process using JavaScript execution within Selenium. As an exercise, you might consider implementing an automated scrolling function to enhance the scraper's capabilities.

**Cell 5: Gather the product links**

```python
section = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "section.z-10")))
page_source = driver.page_source
soup = BeautifulSoup(page_source, "html.parser")
ul_element = soup.find("ul", class_="mt-5 grid gap-6 grid-cols-9")
li_elements = ul_element.find_all("li")
links = []
for li in li_elements:
    div_element = li.find("div", class_="relative border border-solid border-silverSurfer-200 rounded-xs")
    if div_element:
        deck_image_div = div_element.find("div", class_="DeckImage___StyledDiv-sc-1mdvxwk-1 jbskZj")
        if deck_image_div:
            a_element = deck_image_div.find("a")
            if a_element and "href" in a_element.attrs:
                link = "https://www.bigbasket.com" + a_element["href"]
                links.append(link)
```

In this section of the code, we perform the critical task of extracting all product links from the main category page. The process involves several steps:

* HTML Structure Analysis: We examine the webpage's structure to identify the location of product links. E-commerce sites like BigBasket typically organize their products within a consistent HTML structure.
    
* Element Location: Using BeautifulSoup, we locate a specific `<ul>` (unordered list) element that contains all product listings. This `<ul>` is identified by a unique class name.
    
* Iterative Search: Once the list is located, we iterate through each `<li>` (list item) element within it. Each list item typically corresponds to a single product.
    
* Link Extraction: For each product item, we search for an `<a>` tag (hyperlink) within a specific `<div>` structure. This `<a>` tag contains the relative URL for the individual product page.
    
* URL Construction: When a valid link is found, we construct the full URL by prepending the base URL ("[https://www.bigbasket.com](https://www.bigbasket.com)") to the relative URL. This ensures we have complete, functional links.
    
* Comprehensive Collection: The process results in a list containing URLs for all products displayed on the page.
    

This systematic approach allows us to collect all product links from the main category page efficiently. This step is crucial for the subsequent phase of our scraping process, where we'll visit each product page individually to extract detailed information.

**Cell 6: The grand finale - scrape all the products**

```python
data = []
for link in links:
    driver.get(link)
    try:
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.ProductDetail___StyledDiv-sc-14w1o1k-0.iUVPaR")))
    except TimeoutException:
        print(f"Timeout occurred for link: {link}. Skipping to the next link.")
        continue
    driver.execute_script("window.scrollBy(0, 2500);")
    product_page_source = driver.page_source
    product_soup = BeautifulSoup(product_page_source, "html.parser")
    breadcrumb_div = product_soup.find("div", class_="Breadcrumb___StyledDiv-sc-1jdzjpl-0 hlQOJm")
    if breadcrumb_div:
        category_divs = breadcrumb_div.find_all("div", class_="flex justify-start items-center")
        if len(category_divs) >= 4:
            category = category_divs[1].find("span").text.strip()
            sub_category = category_divs[2].find("span").text.strip()
            sub_sub_category = category_divs[3].find("span").text.strip()

    offset_div = product_soup.find("div", class_="col-span-12 offset")
    if offset_div:
        kiucsj_div = offset_div.find("div", class_="PD___StyledDiv-sc-xi1djx-0 kiucsj")
        if kiucsj_div:
            more_details_section = kiucsj_div.find("section", class_="MoreDetails___StyledSection-sc-1h9rbjh-4 bnsJyy")
            if more_details_section:
                dNIxde_divs = more_details_section.find_all("div", class_="MoreDetails___StyledDiv-sc-1h9rbjh-0 dNIxde")
                if len(dNIxde_divs) > 0:
                    about_product_div = dNIxde_divs[0].find("div", class_="bullets pd-4 leading-xss text-md")
                    if about_product_div:
                        about_product = about_product_div.find("div").text.strip()
                    else:
                        about_product = ""

                kIqWEi_div = more_details_section.find("div", class_="MoreDetails___StyledDiv-sc-1h9rbjh-0 kIqWEi")
                if kIqWEi_div:
                    ean_code_div = kIqWEi_div.find("div", class_="bullets pd-4 leading-xss text-md")
                    if ean_code_div:
                        ean_code_text = ean_code_div.find("div").text.strip()
                        ean_code = ean_code_text.split("EAN Code:")[1].strip().split(" ")[0] if "EAN Code:" in ean_code_text else ""
                    else:
                        ean_code_text = ""
                        ean_code = ""
                else:
                    ean_code_text = ""
                    ean_code = ""
            else:
                about_product = ""
                ean_code_text = ""
                ean_code = ""
        else:
            about_product = ""
            ean_code_text = ""
            ean_code = ""
    else:
        about_product = ""
        ean_code_text = ""
        ean_code = ""

    image_div = product_soup.find("div", class_="h-full w-full")
    image_link = image_div.find("img")["src"] if image_div else ""

    description_section = product_soup.find("section", class_="Description___StyledSection-sc-82a36a-0 jMGGnR")
    if description_section:
        brand_link = description_section.find("a", class_="Description___StyledLink-sc-82a36a-1 gePjxR")
        brand = brand_link.text.strip() if brand_link else ""

        sku_name_h1 = description_section.find("h1", class_="Description___StyledH-sc-82a36a-2 bofYPK")
        sku_name = sku_name_h1.text.strip() if sku_name_h1 else ""

        mrp_td = description_section.find("td", class_="Description___StyledTd-sc-82a36a-4 fLZywG")
        mrp = mrp_td.text.strip().split(" ")[1] if mrp_td else ""

    sku_size = "" 
    sku_size_section = product_soup.find("section", class_="PackSizeSelector___StyledSection-sc-l9rhbt-0 jFkiCb")
    if sku_size_section:
        sku_size_div = sku_size_section.find("div", class_="justify-between cursor-pointer rounded-2xs overflow-hidden mb-2.5 hover:shadow-1 border flex bg-white min-h-16 border-appleGreen-500")
        if sku_size_div:
            sku_size_span = sku_size_div.find("span", class_="Label-sc-15v1nk5-0 PackSizeSelector___StyledLabel2-sc-l9rhbt-2 gJxZPQ hDJUsF")
            sku_size = sku_size_span.text.strip() if sku_size_span else ""

    product_data = {
        "Category": category,
        "Sub-Category": sub_category,
        "Sub-sub-Category": sub_sub_category,
        "Product Link": link,
        "EAN Code": ean_code,
        "Image Link": image_link,
        "Brand": brand,
        "SKU Name": sku_name,
        "SKU Size": sku_size,
        "MRP": mrp,
        "About the Product": about_product
    }
    data.append(product_data)

save_data_to_excel(data, "product_data.xlsx")
```

This section encompasses the core functionality of our web scraping process. Here's a detailed breakdown of the operations:

1. Product Page Navigation: We iterate through each product URL collected in the previous step. Selenium is used to navigate to each product's individual page.
    
2. Page Loading: A wait mechanism is implemented to ensure proper page loading before data extraction begins. If a page fails to load within a specified time limit, it's skipped to prevent the script from stalling.
    
3. Page Interaction: JavaScript is executed to scroll the page, ensuring that dynamically loaded content becomes accessible for scraping.
    
4. Data Extraction: Once the page is fully loaded, BeautifulSoup parses the HTML content. We then systematically extract various product details, including:
    
    * Category and subcategories
        
    * Product name (SKU name)
        
    * Brand
        
    * Price (MRP)
        
    * EAN code
        
    * Product description
        
    * Image URL
        
    * Product size or weight
        
5. Data Storage: The extracted information for each product is compiled into a dictionary, which is then appended to a list containing data for all products.
    
6. Error Handling: Try-except blocks are implemented to manage potential errors, such as missing elements or unexpected page structures. This error handling ensures the script's resilience when encountering anomalies on specific product pages.
    
7. Data Export: After processing all products, the pandas library is utilized to convert our list of product dictionaries into a DataFrame. This DataFrame is then exported as an Excel file. If the file already exists, new data is appended; otherwise, a new file is created.
    

The extracted data can be viewed here: [Extracted Product Data](https://www.kaggle.com/datasets/gauranggujrati/big-basket-products-dataset)

### How to scrape if the website does not want you to scrape?

First off, let's be clear: we're walking a fine line here. Always check a website's robots.txt and terms of service before scraping. We're here to be clever, not criminal, right?

Now, let's break down:

1. **Multiple User Agents:**
    

```python
user_agents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
]
```

This is like having multiple disguises. One request you're Chrome on Windows, next you're Safari on Mac.

2. **Detailed Headers:**
    

```python
headers = {
    'User-Agent': random.choice(user_agents),
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Referer': 'https://www.google.com/',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
}
```

These headers are like your fake ID, business card, and backstory all rolled into one. They make your request look legit.

3. **IP Rotation:** This is like changing your digital address. You can use proxy servers or VPNs to make it seem like you're connecting from different locations. Here's a simple example:
    

```python
proxies = [
    {'http': 'http://proxy1:port'},
    {'http': 'http://proxy2:port'},
]
proxy = random.choice(proxies)
response = requests.get(url, headers=headers, proxies=proxy)
```

4. **Captcha Solving:** Ah, CAPTCHAs - the bane of every scraper's existence. You've got two main options: a) Online CAPTCHA Solving Services: Services like 2captcha or Anti-Captcha. They're like having a team of humans solving puzzles for you. b) DIY CAPTCHA Solver.  
    I once created a captcha solver for a particular website. (I won't name the website obviously!) But here's the GitHub repository for it: [Captcha Solver](https://github.com/Gaurang105/Captcha-Solver)
    

### FINAL NOTES

As we conclude this comprehensive guide to web scraping, it's crucial to address the ethical implications of these techniques. While you've learned powerful methods for data extraction, including how to use user agents, navigate website defenses, and handle CAPTCHAs, it's essential to approach web scraping with responsibility and respect for website owners and their data.

Before embarking on any web scraping project, consider these important ethical guidelines:

1. Always respect the `robots.txt` file and adhere to the website's terms of service.
    
2. Implement appropriate delays between requests to avoid overloading the server.
    
3. Be prepared to cease operations if you encounter resistance or blocking from the website.
    
4. When possible, seek permission from website owners or inquire about API access for data retrieval.
    
5. Use the collected data responsibly and in compliance with relevant laws and regulations.
    

Remember, the ability to scrape a website doesn't necessarily grant the right to do so. It's crucial to consider the legal and ethical implications of your actions. Web scraping should be conducted with integrity, ensuring that your practices don't harm the websites you're interacting with or violate any legal standards.