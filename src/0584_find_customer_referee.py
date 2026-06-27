import pandas as pd


def find_customer_referee(customer: pd.DataFrame) -> pd.DataFrame:
    row = customer["referee_id"].isna() | (customer["referee_id"] != 2)
    col = ("name",)
    return customer.loc[row, col]
