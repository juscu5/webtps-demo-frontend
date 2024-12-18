import React from "react";
import "./TpsReport.scss";
import "handsontable/dist/handsontable.full.min.css";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";

//Bootstrap
import Table from 'react-bootstrap/Table';
import { Pagination } from "react-bootstrap";

//Table-Setup
import Setup from '../../table-setup/Setup.json';
//Table-Data
import Data from '../../api-services/TableData.json';

registerAllModules();

const TpsReport = () => {

    let items = [];

    const tSetup = Setup.tableSetup;
    
    //TpsData
    const sType = Data.TPSReport.SubType
    const tData = Data.TableData.Data

    //HcSummaryData
    const hType = Data.HCSummary.SubType

    //FTESummary
    const fType = Data.FTESummary.SubType

    //Additions
    const aType = Data.Additions.SubType

    return (
        <div className="tpsReport"> 
            <h1>Web TPS</h1>
            <div className="tpsTable">
                <Table>
                <tbody>
                <tr>
                    <td width="12.5%">
                        <HotTable
                            colHeaders={Data.TPSReport.Type}
                            data={sType}
                            colWidths={215}
                            {...tSetup}
                        />
                    </td>
                    <td rowSpan={4}>
                        <HotTable
                            colHeaders=" "
                            data={tData}
                            {...tSetup}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="hcSum" width="12.5%">
                        <HotTable
                            colHeaders={Data.HCSummary.Type}
                            data={hType}
                            colWidths={215}
                            {...tSetup}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="fteSum" width="12.5px">
                        <HotTable
                            colHeaders={Data.FTESummary.Type}
                            data={fType}
                            colWidths={215}
                            {...tSetup}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="additions" width="12.5px">
                        <HotTable
                            colHeaders={Data.Additions.Type}
                            data={aType}
                            colWidths={215}
                            {...tSetup}
                        />
                    </td>
                </tr>
                </tbody>
                </Table>
            </div>
            <div className="page">
                <Pagination>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                </Pagination>
            </div>
        </div>
    );
};

export default TpsReport;
