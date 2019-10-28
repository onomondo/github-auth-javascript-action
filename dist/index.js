module.exports=function(e,t){"use strict";var r={};function __webpack_require__(t){if(r[t]){return r[t].exports}var n=r[t]={i:t,l:false,exports:{}};e[t].call(n.exports,n,n.exports,__webpack_require__);n.l=true;return n.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(104)}return startup()}({87:function(e){e.exports=require("os")},104:function(e,t,r){const n=r(747);const o=r(622);const s=r(470);const i=e=>`\n${e}\n[url "https://api.github.com/"]\n    insteadOf = "https://github.com/"\n[url "https://ssh@github.com/"]\n    insteadOf = "ssh://git@github.com/"\n[url "https://git@github.com/"]\n    insteadOf = "git@github.com:"\n`;try{const e=s.getInput("github-auth-token");const t=o.join(process.env.HOME,".gitconfig");const r=n.readFileSync(t).toString();console.log("gitConfigContents",r);n.writeFileSync(t,i(r));console.log(`Wrote ${t}`);const u=`${process.env.HOME}/.git-askpass`;n.writeFileSync(u,`echo ${e}`);s.exportVariable("GIT_ASKPASS",u);console.log(`Wrote ${u}`)}catch(e){s.setFailed(e.message)}},431:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});const n=r(87);function issueCommand(e,t,r){const o=new Command(e,t,r);process.stdout.write(o.toString()+n.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="##[";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";for(const t in this.properties){if(this.properties.hasOwnProperty(t)){const r=this.properties[t];if(r){e+=`${t}=${escape(`${r||""}`)};`}}}}e+="]";const t=`${this.message||""}`;e+=escapeData(t);return e}}function escapeData(e){return e.replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escape(e){return e.replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/]/g,"%5D").replace(/;/g,"%3B")}},470:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r(function(t){t(e)})}return new(r||(r=Promise))(function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const o=r(431);const s=r(622);var i;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(i=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;o.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function exportSecret(e,t){exportVariable(e,t);o.issueCommand("set-secret",{},t);throw new Error("Not implemented.")}t.exportSecret=exportSecret;function addPath(e){o.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${s.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(" ","_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=i.Failure;error(e)}t.setFailed=setFailed;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e)}t.error=error;function warning(e){o.issue("warning",e)}t.warning=warning;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return n(this,void 0,void 0,function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r})}t.group=group},622:function(e){e.exports=require("path")},747:function(e){e.exports=require("fs")}});