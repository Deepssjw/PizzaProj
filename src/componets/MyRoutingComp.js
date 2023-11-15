import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassComp from "./ClassComp";
import FunctionComp from "./FunctionComp";
import MyImagesCom from "./MyImagesCom";
import MyStateComp from "./MyStateComp";
import PageNotFound from "./PageNotFound";
import MyCssComp from "./MyCssComp";
import MyEventsComp from "./MyEventsComp";
import NavComp from "./NavComp";
import ReactHooksComp from "./ReactHooksComp";
import UseStateHookComp from './UseStateHookComp';
import UseEffectHook from './UseEffectHookComp';
import Dashboard from "../CRUD/Dashboard";
import AddComp from "../CRUD/AddComp";
import EditComp from "../CRUD/EditComp";
import { Provider } from "react-redux";
import {state} from "react"

class MyRoutingComp extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <div className="card border-primary">
              <div className="card-header border-primary">
                <NavComp />
              </div>
              <div className="card-body border-primary">
                <Routes>
                  {/* default routing  */}
                  <Route path="" element={<MyImagesCom />}></Route>
                  {/* naming routing  */}
                  <Route path="myimages" element={<MyImagesCom />}></Route>
                  <Route path="classcomp" element={<ClassComp />}></Route>
                  <Route path="funcomp" element={<FunctionComp />}></Route>
                  {/* parameterize routing  */}
                  <Route path="mystate/:id" element={<MyStateComp />}></Route>
                  <Route path="mystate" element={<MyStateComp />}></Route>
                  {/* child routing  */}
                  <Route path="mycss" element={<MyCssComp />}>
                    <Route path="myevents" element={<MyEventsComp />}></Route>
                  </Route>
                  <Route path="reacthook" element={<ReactHooksComp />}>
                    <Route path="" element={<UseStateHookComp />}></Route>
                    <Route path="usestate" element={<UseStateHookComp />}></Route>
                    <Route path="useeffect" element={<UseEffectHook />}></Route>
                  </Route>

                  <Route path="dashboard" element={<Dashboard />}></Route>
                  <Route path="addcomp" element={<AddComp/>}></Route>
                  <Route path="editcomp/:id" element={<EditComp/>}></Route>
                  {/* wild card routing  */}
                  <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
              </div>
              <div className="card-footer border-primary">
                <strong className="text-primary">
                  This App Is Design And Develoiped By: Panchashil Wankhede
                </strong>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default MyRoutingComp;
