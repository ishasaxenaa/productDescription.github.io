import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState ,Component} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCurrencies } from "./containers/redux/actions/currencyActions";

function App() {
  const reducerData = useSelector((state) => state.currencyData.currencies);
  const [initialState, setInitialState] = useState(50);
  const [btnName, setBtnName] = useState("Load More");
  let dispatch = useDispatch();
  const fetchData = async () => {
    let d = await axios.get("https://api.coincap.io/v2/assets");

    dispatch(setCurrencies(d));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (e) => {
    if (e.target.innerText === "Load More") {
      setInitialState(initialState + 50);
      setBtnName("Load Less");
    } else {
      setInitialState(initialState - 50);
      setBtnName("Load More");
    }
  };

  return (
    <div className="App">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">MarketCap</th>
            <th scope="col">VWAP</th>
            <th scope="col">Supply</th>
            <th scope="col">Volume(24 Hr)</th>
            <th scope="col">Change (24 Hr)</th>
          </tr>
        </thead>
        <tbody>
          {reducerData?.data?.data
            ?.slice(0, initialState)
            .map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index}</th>
                  <td className="icon-currency-holder">
                    <span className="icon-holder">
                      <img
                        src={`https://assets.coincap.io/assets/icons/${item?.name
                          ?.slice(0, 3)
                          .toLowerCase()}@2x.png`}
                        className="curiconimage"
                      />
                    </span>
                    {item.id}{" "}
                  </td>

                  <td>{Math.floor(item.priceUsd)}</td>
                  <td>{Math.floor(item.marketCapUsd)}</td>
                  <td>{Math.floor(item.vwap24Hr)}</td>
                  <td>{Math.floor(item.supply)}</td>
                  <td>{Math.floor(item.volumeUsd24Hr)}</td>
                  <td>{Math.floor(item.changePercent24Hr) + "%"}</td>
                </tr>
              );
            })}
        </tbody>
        <button type="button" onClick={(e) => handleClick(e)} className="btn btn-primary">{btnName}</button>
      </table>
    </div>
  );
}

export default App;
