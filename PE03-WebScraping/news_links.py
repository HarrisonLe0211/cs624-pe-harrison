#!/usr/bin/env python3
import os
import requests
from bs4 import BeautifulSoup
import pandas as pd

# Setup the export directory to the same directory as this script
BASE_DIR = os.path.dirname(__file__)

def scrape_front_page():

    # Step 1: Fetch the webpage and check if it's online]
    #   Note: The requests library does two things
    #       - It makes the HTTP GET request to the server at url
    #       - It collects the response body (the HTML, in this case) into two attributes on the resp object:
    #           - resp.content: the raw bytes of the response body
    #           - resp.text: the same bytes, decoded into a Python string
    url = "https://news.ycombinator.com/news"
    resp = requests.get(url)
    resp.raise_for_status()

    # Step 2: Parse and find all link_tags
    soup = BeautifulSoup(resp.content, "lxml")
    link_tags = soup.select("span.titleline > a") or soup.select("a.titlelink") or soup.select("a.storylink")

    # Step 3: Takes the raw list of <a> elements you extracted from the page and turns them into a structured 
    # dataset
    items = []
    for a in link_tags:
        title = a.get_text(strip=True)
        href = a["href"]
        items.append({"Title": title, "URL": href})
        if href.startswith("item?"):
            href = requests.compat.urljoin(url, href)

        # Print to terminal
        print(title)
        print(href)
        print()

    return items

# Save to a spread sheet file, categorized by columns from the dicts' keys
def save_to_excel(items, filename="hacknews_links.xlsx"):
    path = os.path.join(BASE_DIR, filename)
    # This converts the list of dicts into a pandas DataFrame. The dict keys become column names 
    # ("Title", "URL")
    pd.DataFrame(items).to_excel(path, index=False)
    print(f"Saved {len(items)} entries to {path}")

if __name__ == "__main__":
    data = scrape_front_page()
    save_to_excel(data)
