import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 35px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #e9e8e7;
    color: #bc937c;
    padding: 8px;
  }
  tr {
    &:nth-child(even) {
      background: rgba(0, 0, 0, 0.015);
    }
    &:last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  td {
    padding: 8px;
    border-bottom: 1px solid #e9e8e7;
    color: #7a878e;
  }
`;

const Order = styled.td`
  p {
    font-size: 13px;
    cursor: pointer;
    color: #647d9b;
    margin: 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TrackingNumber = styled.td`
  text-align: center;
  font-size: 13px;
`;

const OrderDate = styled.td`
  font-size: 13px;
`;

const OrderPrice = styled.td`
  font-size: 13px;
`;

const CustomerName = styled.td`
  font-size: 14px;
`;

const Status = styled.div`
  display: inline-block;
  width: 80%;
  min-width: 8ex;
  font-size: 1em;
  max-width: 100px;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: top;
  background-color: ${props => props.background};
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
`;

class OpitionSuvey extends Component {
  render() {
    const lists = [
      {
        orderInvoice: "#53431",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "finished",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53430",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "processing",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53429",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "processing",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53428",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "processing",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53427",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "processing",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53426",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "fail",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53425",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "warning",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53424",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "fail",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53423",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "finished",
        trackingNumber: "CGX0089734531"
      },
      {
        orderInvoice: "#53422",
        customerName: "李小力 小姐",
        orderDate: "2019/06/01",
        orderPrice: 1500,
        status: "finished",
        trackingNumber: "CGX0089734531"
      }
    ];
    return (
      <Div>
        <h2>會員意見資料</h2>
        <Table>
          <tbody>
            <tr>
              <th>客單編號</th>
              <th>顧客名稱</th>
              <th>日期</th>
              <th>消費金額</th>
              <th>處理狀態</th>
              <th style={{ textAlign: "center" }}>追蹤碼</th>
            </tr>
            {lists.map((data, i) => (
              <tr key={i}>
                <Order>
                  <p>Order {data.orderInvoice}</p>
                </Order>
                <CustomerName>{data.customerName}</CustomerName>
                <OrderDate>{data.orderDate}</OrderDate>
                <OrderPrice>NT${data.orderPrice}</OrderPrice>
                <td>
                  {data.status === "finished" ? (
                    <Status background="#5F9B8B">完成</Status>
                  ) : data.status === "processing" ? (
                    <Status background="#647D9B">處理中</Status>
                  ) : data.status === "fail" ? (
                    <Status background="#EB9093">客訴成立</Status>
                  ) : data.status === "warning" ? (
                    <Status background="#FFC56A">未採納</Status>
                  ) : null}
                </td>
                <TrackingNumber>
                  {data.status === "processing" ? data.trackingNumber : "-"}
                </TrackingNumber>
              </tr>
            ))}
          </tbody>
        </Table>
      </Div>
    );
  }
}

export default OpitionSuvey;
