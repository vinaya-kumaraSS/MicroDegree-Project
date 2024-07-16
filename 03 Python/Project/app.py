import requests
from bs4 import BeautifulSoup

products_to_track = [
    {
        "product_url": "https://www.amazon.in/Samsung-Waterfall-sAMOLED-Display-Security/dp/B0C7C28GKF/ref=pd_lpo_sccl_4/258-4250627-1002553?pd_rd_w=zCdon&content-id=amzn1.sym.e0c8139c-1aa1-443c-af8a-145a0481f27c&pf_rd_p=e0c8139c-1aa1-443c-af8a-145a0481f27c&pf_rd_r=N1B0700X7BFGF4WGRMTX&pd_rd_wg=punsA&pd_rd_r=dbc005c3-8e0f-4675-93ae-2b83933b7096&pd_rd_i=B0C7C28GKF&th=1",
        "name": "Samsung Galaxy M34 5G",
        "target_price": 10000
    },
    {
        "product_url": "https://www.amazon.in/dp/B0CDQ8P8S4/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B0CDQ8P8S4&pd_rd_w=6WbgJ&content-id=amzn1.sym.413ef885-ae1b-472f-afa4-d683cda6ad0d&pf_rd_p=413ef885-ae1b-472f-afa4-d683cda6ad0d&pf_rd_r=VT9QRSG3HCNTSCKP8AVV&pd_rd_wg=622g1&pd_rd_r=117ddd4d-51e8-4ac3-a455-ec4af32a318d&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
        "name": "Redmi 12 (Moonstone Silver, 6GB RAM, 128GB Storage)",
        "target_price": 15000
    },
    {
        "product_url": "https://www.amazon.in/dp/B0CNX82VVQ/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0CNX82VVQ&pd_rd_w=kiDr1&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=615V5CYVE7XN035KC9VY&pd_rd_wg=qgPcl&pd_rd_r=a6940e78-35f3-43dd-bf65-18cbe93ee6e2&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
        "name": "Redmi 13C 5G (Startrail Silver, 4GB RAM, 128GB Storage)",
        "target_price": 12000
    },
    {
        "product_url": "https://www.amazon.in/dp/B0CNX82VVQ/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0CNX82VVQ&pd_rd_w=kiDr1&content-id=amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_p=9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0&pf_rd_r=615V5CYVE7XN035KC9VY&pd_rd_wg=qgPcl&pd_rd_r=a6940e78-35f3-43dd-bf65-18cbe93ee6e2&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
        "name": "Redmi 12 5G Jade Black 6GB RAM 128GB ROM",
        "target_price": 10500
    },
    {
        "product_url": "https://www.amazon.in/dp/B0C9JFWBH7/ref=sspa_dk_detail_0?pd_rd_i=B0C9JFWBH7&pd_rd_w=vIhX2&content-id=amzn1.sym.413ef885-ae1b-472f-afa4-d683cda6ad0d&pf_rd_p=413ef885-ae1b-472f-afa4-d683cda6ad0d&pf_rd_r=8VM5JS14NWKN3617WAEV&pd_rd_wg=jcOJS&pd_rd_r=86a4b1a9-98fa-4514-8d96-e94ea05ff815&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1",
        "name": "iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage)",
        "target_price": 14000
    }
]

def give_product_price(URL):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0"
    }

    page = requests.get(URL, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')

    product_price = soup.find("span", {"class": "a-price-whole"})
    if not product_price:
        product_price = soup.find("span", {"class": "a-size-mini a-color-secondary aok-nowrap a-text-strike"})

    return product_price.getText() if product_price else None

result_file = open('03 Python/Project/my_result_file.txt', 'w')

try:
    for every_product in products_to_track:
        products_price_returned = give_product_price(every_product['product_url'])
        if products_price_returned:
            print(f"{products_price_returned} - {every_product['name']}")

            # Remove any non-numeric characters (e.g., commas) and convert to float
            my_product_price = ''.join(filter(str.isdigit, products_price_returned))
            my_product_price = float(my_product_price)

            if my_product_price < every_product.get("target_price"):
                print("Available at your best price")
                result_file.write(f"{every_product['name']} - Available at Target Price. Current Price - Rs. {my_product_price}\n")
            else:
                print("Still at current price")
        else:
            print(f"Could not retrieve the price for {every_product['name']}")
finally:
    result_file.close()
