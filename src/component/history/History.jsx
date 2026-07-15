import historyStyles from "./history.module.css";
import { useState } from "react";
import BottomNav from "../bottomNav/BottomNav";
import Sidebar from "../sidebar/Sidebar";

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className={`${historyStyles.historyPage}`}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} overlay={true} />

      <div className={historyStyles.history}>
        <form className={historyStyles.searchForm} onSubmit={handleSearch}>
          <div className={`${historyStyles.searchBox}`}>
            <input
              type="search"
              name="search"
              placeholder="Search analysis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={historyStyles.searchInput}
              autoComplete="off"
            />

            <button type="submit" aria-label="Search">
              <i className="fa-solid fa-search"></i>
            </button>
          </div>

          {/* hambuger div  */}
          <div
            className={historyStyles.hambuger}
            onClick={() => setIsOpen(true)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </form>

        <div className={`${historyStyles.historyCards}`}>
          {/* history cards */}
          <div className={`${historyStyles.historyCard}`}>
            <div className={`${historyStyles.cardLeft}`}>
              <img src="/result-panel.jpeg" alt="img-name" />
              <div className={`${historyStyles.cardHeader}`}>
                <h3>🌿Cassava Analysis</h3>

                <p className={`${historyStyles.greenBkg}`}>Healthy</p>
              </div>
            </div>

            <div className={`${historyStyles.cardMeta}`}>
              <span>10 Jul 2026</span>
              <span>2:14 PM</span>
            </div>

            <div className={`${historyStyles.cardActions}`}>
              <button>View</button>
              <button>Delete</button>
            </div>
          </div>

          {/* history cards */}
          <div className={`${historyStyles.historyCard}`}>
            <div className={`${historyStyles.cardLeft}`}>
              <img src="/result-panel.jpeg" alt="img-name" />
              <div className={`${historyStyles.cardHeader}`}>
                <h3>🌽Maize Analysis</h3>
                <p className={`${historyStyles.greenBkg}`}>Healthy</p>
              </div>
            </div>

            <div className={`${historyStyles.cardMeta}`}>
              <span>10 Jul 2026</span>
              <span>2:14 PM</span>
            </div>

            <div className={`${historyStyles.cardActions}`}>
              <button>View</button>
              <button>Delete</button>
            </div>
          </div>

          {/* history cards */}
          <div className={`${historyStyles.historyCard}`}>
            <div className={`${historyStyles.cardLeft}`}>
              <img src="/result-panel.jpeg" alt="img-name" />
              <div className={`${historyStyles.cardHeader}`}>
                <h3>🥔Yam Analysis</h3>
                <p className={`${historyStyles.orangeBkg}`}>Moderate Risk</p>
                {/* <p>Healthy • 94% Confidence</p> */}
              </div>
            </div>

            <div className={`${historyStyles.cardMeta}`}>
              <span>10 Jul 2026</span>
              <span>2:14 PM</span>
            </div>

            <div className={`${historyStyles.cardActions}`}>
              <button>View</button>
              <button>Delete</button>
            </div>
          </div>

          {/* history cards */}
          <div className={`${historyStyles.historyCard}`}>
            <div className={`${historyStyles.cardLeft}`}>
              <img src="/result-panel.jpeg" alt="img-name" />
              <div className={`${historyStyles.cardHeader}`}>
                <h3>🍅Tomatoes Analysis</h3>
                <p className={`${historyStyles.greenBkg}`}>Healthy</p>
              </div>
            </div>

            <div className={`${historyStyles.cardMeta}`}>
              <span>10 Jul 2026</span>
              <span>2:14 PM</span>
            </div>

            <div className={`${historyStyles.cardActions}`}>
              <button>View</button>
              <button>Delete</button>
            </div>
          </div>

          {/* history cards */}
          <div className={`${historyStyles.historyCard}`}>
            <div className={`${historyStyles.cardLeft}`}>
              <img src="/result-panel.jpeg" alt="img-name" />
              <div className={`${historyStyles.cardHeader}`}>
                <h3>🍚Rice Analysis</h3>
                <p className={`${historyStyles.redBkg}`}>High Risk</p>
              </div>
            </div>

            <div className={`${historyStyles.cardMeta}`}>
              <span>10 Jul 2026</span>
              <span>2:14 PM</span>
            </div>

            <div className={`${historyStyles.cardActions}`}>
              <button>View</button>
              <button>Delete</button>
            </div>
          </div>
        </div>

        <h5>That's all for now👋</h5>
      </div>

      <BottomNav />
    </div>
  );
};

export default History;
