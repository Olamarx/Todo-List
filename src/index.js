/* eslint-disable */
import _ from 'lodash';
import './style.css';
import Logic from './modules/logicToDisplay.js';
import TaskFunc from './modules/taskCompleteFunc.js'
import ClearAll from './modules/clearAll.js'

Logic.loadUponReload()
Logic.enterFunc()
Logic.clickFunct()
Logic.displayDelete()
Logic.edit()
TaskFunc.checkBox()
TaskFunc.deleteAllchecked()
TaskFunc.reloadFunc()
ClearAll.clearBtnFun()