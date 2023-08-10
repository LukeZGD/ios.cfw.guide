import{_ as s,r as l,o as d,c,a as e,b as o,d as t,w as a,e as r}from"./app.9e5ac4ef.js";var u="/assets/images/futurerestore-gui.png";const h={},p=e("h2",{id:"notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),o(" Notes")],-1),g={href:"https://gist.github.com/aac55c97f7925cddcf5ec3167f85dfe8",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"not",-1),_={href:"https://gist.github.com/Cryptiiiic/b82133ac290070939189e1377dc3ac85",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),m=e("ul",null,[e("li",null,[o("Blobs saved for the version you want to restore to "),e("ul",null,[e("li",null,[o("These blobs must be for "),e("strong",null,"your"),o(" device only; you cannot use other people's blobs")])])]),e("li",null,[o("A jailbroken device "),e("strong",null,"or"),o(" an A10-A11 device on 15.0-15.1.1")])],-1),y={class:"custom-container danger"},w=e("p",{class:"custom-container-title"},"DANGER",-1),v=e("strong",null,"must",-1),k={href:"https://docs.google.com/spreadsheets/d/1Mb1UNm6g3yvdQD67M413GYSaJ4uoNhLgpkc7YKi3LBs/edit#gid=0",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1),x={href:"https://github.com/CoocooFroggy/FutureRestore-GUI/releases",target:"_blank",rel:"noopener noreferrer"},T={href:"https://ipsw.me",target:"_blank",rel:"noopener noreferrer"},N=e("ul",null,[e("li",null,"This should be the same iOS version as your blob")],-1),O={href:"https://www.apple.com/itunes/",target:"_blank",rel:"noopener noreferrer"},C=e("ul",null,[e("li",null,"Scroll down and select the other Windows build as the Windows Store version will not work")],-1),F={href:"https://github.com/opa334/TrollStore/releases",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/opa334/TrollNonce/releases",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"getting-started-jailbroken",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-jailbroken","aria-hidden":"true"},"#"),o(" Getting Started (Jailbroken)")],-1),j=e("li",null,"Open your package manager on your jailbroken iDevice",-1),A={href:"https://repo.1conan.com",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,"Download and install dimentio",-1),D=e("li",null,"Download and install NewTerm2",-1),R=e("li",null,[o("Proceed to "),e("a",{href:"#finding-the-generator"},"Finding the generator")],-1),G=e("h2",{id:"getting-started-non-jailbroken",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-non-jailbroken","aria-hidden":"true"},"#"),o(" Getting Started (Non-Jailbroken)")],-1),W={href:"https://github.com/opa334/TrollStore",target:"_blank",rel:"noopener noreferrer"},P=e("ul",null,[e("li",null,'If "Not Supported" is listed and you cannot jailbreak or you do not have an A11- device, you will be unable to proceed further')],-1),U={href:"https://github.com/opa334/TrollNonce/releases",target:"_blank",rel:"noopener noreferrer"},L=e("li",null,"Proceed to the next section",-1),q=r('<h2 id="finding-the-generator" tabindex="-1"><a class="header-anchor" href="#finding-the-generator" aria-hidden="true">#</a> Finding the generator</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Make sure you do not edit the blob file! Doing so will make it invalid and unusable with futurerestore.</p></div><ol><li><p>Open your blob in a text editor and search for <code>generator</code><img src="https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg" alt="GeneratorExample"></p></li><li><p>Note down the value inside the <code>&lt;string&gt;</code> field</p><ul><li>This should be a <code>0x</code> followed 16 characters which will be a combination of letters and numbers. This is your generator.</li></ul></li></ol><p><strong>NOTE:</strong> If there is no generator value, try to remember which jailbreak you were using at the time of saving blobs. If you were using unc0ver, your generator is most likely <code>0x1111111111111111</code>, and if you were using Chimera/Odyssey/Taurine, your generator is most likely <code>0xbd34a880be0b53f3</code></p><h2 id="setting-the-nonce-jailbroken" tabindex="-1"><a class="header-anchor" href="#setting-the-nonce-jailbroken" aria-hidden="true">#</a> Setting the nonce (Jailbroken)</h2><ol><li><p>Open NewTerm 2 on your iDevice and type the following command, where <code>[generator]</code> is the value you just grabbed: <code>su root -c &#39;dimentio [generator]&#39;</code></p></li><li><p>When asked for a password, enter your root password</p><ul><li>By default, this is set to <code>alpine</code>, not your phone&#39;s password.</li></ul></li><li><p>Once the command executes, a lot of text should appear</p></li><li><p>Near the end of the text, you should see the line <code>Set nonce to [generator]</code></p></li></ol><h2 id="setting-the-nonce-unjailbroken" tabindex="-1"><a class="header-anchor" href="#setting-the-nonce-unjailbroken" aria-hidden="true">#</a> Setting the nonce (Unjailbroken)</h2>',7),J={class:"custom-container warning"},M=e("p",{class:"custom-container-title"},"WARNING",-1),V={href:"https://gist.github.com/aac55c97f7925cddcf5ec3167f85dfe8",target:"_blank",rel:"noopener noreferrer"},Y=e("ol",null,[e("li",null,"Open the TrollNonce app"),e("li",null,[o("Select the "),e("code",null,"Set Nonce"),o(" option, then input the generator value you found in your blob into the box. Tap "),e("code",null,"Set")])],-1),H=e("h3",{id:"on-computer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#on-computer","aria-hidden":"true"},"#"),o(" On Computer")],-1),K={class:"custom-container danger"},Q=e("p",{class:"custom-container-title"},"DANGER",-1),z=e("strong",null,"cannot",-1),X=r('<ol><li><p>Connect your iDevice to your computer</p></li><li><p>Make sure that your computer is trusted by your device</p><ul><li>Optionally, you can create a full backup of your device through iTunes or Finder</li></ul></li><li><p>Open FutureRestoreGUI on your computer</p><ul><li>If prompted by Windows Defender, Windows Smartscreen or other anti-virus software, allow the program to run - it\u2019s safe</li></ul></li><li><p>When opening FutureRestoreGUI, you should be greeted by this menu: <img src="'+u+'" alt="FutureRestoreGUI main screen"></p></li><li><p>Click the <code>Settings</code> button and enable <code>Futurerestore Beta</code>, then click the <code>Download FutureRestore</code> button. <strong>This option is only available for macOS and Linux</strong></p></li></ol>',1),Z={href:"https://cdn.cryptiiiic.com/bin/Windows/x86_64/futurerestore/futurerestore-Windows-x86_64-v2.0.0-test-Build_304-RELEASE.exe",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"Select FutureRestore Binary/Executable",-1),ee=e("code",null,"Open",-1),oe=r("<ol><li>Click the <code>Select Blob File...</code> button and select your blob .shsh2 file</li><li>Click the <code>Select Target iPSW File...</code> and select your .ipsw file</li><li>Then click the Next button to navigate to the Options menu, make sure <code>Extra Logs</code> is enabled</li><li>If you are not downgrading, then it is safe to enable <code>Preserve Data</code> in the options menu in order to keep data. However, using it while downgrading may be dangerous</li><li>Do not enable <code>AP Nonce Collision</code> on any modern devices</li><li>Enable <code>No RSEP</code></li><li>Click Next to navigate to the controls menu</li><li>Click <code>Start Futurerestore</code></li></ol>",1),te={href:"https://discord.gg/9apvC4C3CC",target:"_blank",rel:"noopener noreferrer"};function ne(re,ie){const n=l("ExternalLinkIcon"),i=l("router-link");return d(),c("div",null,[p,e("p",null,[o("If you are on iOS 15.2 or newer on an A10- device, you should follow "),e("a",g,[o("this"),t(n)]),o(" guide instead. Note that if you are on a device that supports iOS 16 (which includes A12+), you will "),b,o(" be able to follow this guide due to Cryptex1 and SEP/BB incompatibility. For more information on why this is the case, please go "),e("a",_,[o("here"),t(n)]),o(".")]),f,m,e("div",y,[w,e("p",null,[o("You "),v,o(" make sure that the latest SEP/BB is compatible to the version you are attempting to restore to in order to prevent bootloops or failed activation! To do so, please consult the "),e("a",k,[o("SEP/BB Chart"),t(n)]),o('. If a cell says "Compatible" then you are free to restore to that version.')])]),S,e("ul",null,[e("li",null,[o("The latest release of "),e("a",x,[o("FutureRestore-GUI"),t(n)])]),e("li",null,[o("The iPSW file for your device from "),e("a",T,[o("ipsw.me"),t(n)]),N]),e("li",null,[o("On Windows, make sure you have "),e("a",O,[o("iTunes"),t(n)]),o(" installed "),C]),e("li",null,[o("If on an A10 device on 15.0-15.1.1 "),e("ul",null,[e("li",null,[o("The latest version of "),e("a",F,[o("TrollStore"),t(n)])]),e("li",null,[o("The latest version of "),e("a",E,[o("TrollNonce"),t(n)])])])])]),I,e("ol",null,[j,e("li",null,[o("Add "),e("a",A,[o("repo.1conan.com"),t(n)]),o(" to your sources")]),B,D,R]),G,e("ol",null,[e("li",null,[o("Navigate to the "),e("a",W,[o("TrollStore"),t(n)]),o(" GitHub page and follow the installation instructions for your device "),P]),e("li",null,[o("Once TrollStore is installed, install the "),e("a",U,[o("TrollNonce"),t(n)]),o(" app through TrollStore")]),L]),q,e("div",J,[M,e("p",null,[o("This method will not work for A9 devices at all or A10 devices on 15.2+. If you cannot jailbreak, you must follow "),e("a",V,[o("this"),t(n)]),o(" guide.")])]),Y,H,e("div",K,[Q,e("p",null,[o("To reiterate: you "),z,o(" FutureRestore on any device that has supports iOS 16. Following the steps listed below will either result in the process failing or will fail activation when setting up the device, both of which will require a restore to a signed iOS version. While you cannot downgrade, you may have a path to upgrade and instructions/details can be found at the "),t(i,{to:"/updating-blobless"},{default:a(()=>[o("Updating (blobless)")]),_:1}),o(" page.")])]),X,e("ul",null,[e("li",null,[o("Windows users must download the beta from "),e("a",Z,[o("here"),t(n)]),o(". Once that is done, press "),$,o(" and navigate to where you have downloaded the beta. Select the file and click "),ee])]),oe,e("p",null,[o("If you experience any issues during the Process, look in the "),t(i,{to:"/futurerestore-help"},{default:a(()=>[o("FutureRestore help page")]),_:1}),o(", if you still can't find a solution, ask in the #genius-bar forum on the r/jailbreak "),e("a",te,[o("Discord Server"),t(n)]),o(".")])])}var ae=s(h,[["render",ne],["__file","index.html.vue"]]);export{ae as default};
