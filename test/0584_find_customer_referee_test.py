import pandas as pd
from utils.load_module import load_module

mod = load_module("0584_find_customer_referee")


def test_find_customer_referee():
    customer = pd.DataFrame(
        [
            {"id": 1, "name": "Will", "referee_id": None},
            {"id": 2, "name": "Jane", "referee_id": None},
            {"id": 3, "name": "Alex", "referee_id": 2},
            {"id": 4, "name": "Bill", "referee_id": None},
            {"id": 5, "name": "Zack", "referee_id": 1},
            {"id": 6, "name": "Mark", "referee_id": 2},
        ]
    )
    result = mod.find_customer_referee(customer)
    expected = pd.DataFrame({"name": ["Will", "Jane", "Bill", "Zack"]})
    pd.testing.assert_frame_equal(result.reset_index(drop=True), expected)
