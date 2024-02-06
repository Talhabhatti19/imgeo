import React from "react";
import { Root } from "react-dom/client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const NotificationBar = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  return (
    <div className="card-blocks right-side">
      <div className="row">
        <div
          className="nf-row"
          style={{ background: themeBuilder?.table?.backgroundColor }}
        >
          <h3 className="text-20">Notifications</h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 12C7 12.5304 6.78929 13.0391 6.41421 13.4142C6.03914 13.7893 5.53043 14 5 14C4.46957 14 3.96086 13.7893 3.58579 13.4142C3.21071 13.0391 3 12.5304 3 12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10C5.53043 10 6.03914 10.2107 6.41421 10.5858C6.78929 10.9609 7 11.4696 7 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM21 12C21 12.5304 20.7893 13.0391 20.4142 13.4142C20.0391 13.7893 19.5304 14 19 14C18.4696 14 17.9609 13.7893 17.5858 13.4142C17.2107 13.0391 17 12.5304 17 12C17 11.4696 17.2107 10.9609 17.5858 10.5858C17.9609 10.2107 18.4696 10 19 10C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div className="col-md-12">
          {/* <div className="notification-block">
                            {postData.map((card, index) => (
                            <Card 
                                key={index}
                                // icon= {card.icon}
                                title={card.source.name}
                                // description={card.description}
                            />
                            ))}
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
