import React from "react";
import ReactTable from "./ReactTable";
import classnames from "classnames";
export default function Middle(props) {
  let expanderCol = [...props.columns];

  if (props.SubComponent) {
    console.log("ss", props);
    /* expanderCol = [
      {
        Header: "",
        id: "expander",
        resizable: false,
        className: "text-center",
        Cell: ({ row }) => (
          <div
            {...row.getToggleRowExpandedProps()}
            title="Click here to see more information"
            className="rt-td rt-expandable p-0"
          >
            <div
              className={classnames(
                "rt-expander",
                row.isExpanded ? "-open" : ""
              )}
            >
              •
            </div>
          </div>
        )
      }
    ]; */
    //console.log(...expanderCol);
    expanderCol.unshift({
      Header: "",
      id: "expander",
      resizable: false,
      className: "text-center",
      Cell: ({ row }) => {
        console.log(row.getToggleRowExpandedProps());
        return (
          <div
            {...row.getToggleRowExpandedProps()}
            title="Click here to see more information"
            className="rt-td rt-expandable p-0"
          >
            <div
              className={classnames(
                "rt-expander",
                row.isExpanded ? "-open" : ""
              )}
            >
              •
            </div>
          </div>
        );
      }
    });
  }

  return (
    <>
      <ReactTable {...props} columns={expanderCol} />
    </>
  );
}
