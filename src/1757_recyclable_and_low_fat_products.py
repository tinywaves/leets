import pandas as pd


def find_products(products: pd.DataFrame) -> pd.DataFrame:
    row = (products["low_fats"] == "Y") & (products["recyclable"] == "Y")
    col = ("product_id",)
    return products.loc[row, col]
