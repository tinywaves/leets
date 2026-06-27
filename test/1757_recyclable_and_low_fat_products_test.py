import pandas as pd
from utils.load_module import load_module

mod = load_module("1757_recyclable_and_low_fat_products")


def test_find_products():
    data = {
        "product_id": [0, 1, 2, 3, 4],
        "low_fats": ["Y", "Y", "N", "Y", "N"],
        "recyclable": ["N", "Y", "Y", "Y", "N"],
    }
    df = pd.DataFrame(data)
    result = mod.find_products(df)
    expected = pd.DataFrame({"product_id": [1, 3]})
    pd.testing.assert_frame_equal(
        result.reset_index(drop=True), expected.reset_index(drop=True)
    )
