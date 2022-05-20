# Congratulations you find the help page 😉
<br/><br/>

### Here, I will tell you how to use Side!oader, Let`s go!
<br/><br/>
<div style="background-color:#f6d9d5;text-align:center;">
Warning: These instructions only work if you follow every section and step precisely.<br/>
Do not continue after something fails!
</div>
<br/><br/>

# Basic requirements
<br/>
1.Read through the instructions at least once before actually following them, so as to avoid any problems due to any missed steps!<br/>
2.Make sure your computer has adb and fastboot. Setup instructions can be found <a href="#">here</a>.<br/>
3.Enable USB debugging on your device.<br/>
4.Make sure that your model is actually listed in the “Supported models” section <a href="#">here</a> (exact match required!)<br/>
<br/><br/>

# Unlocking the bootloader
### ℹ️ Note: The steps below only need to be run once per device.
<br/>
<div style="background-color:#f6d9d5;text-align:center;font-size:14px;">
Warning: Unlocking the bootloader will erase all data on your device! Before proceeding, ensure the data you would like to retain is backed up to your PC and/or your <br/>
Google account, or equivalent. Please note that OEM backup solutions like Samsung and Motorola backup may not be accessible from LineageOS once installed.
</div>
<br/>

1.Enable OEM unlock in the Developer options under device Settings, if present.  
2.Connect the device to your PC via USB.  
3.On the computer, open a command prompt (on Windows) or terminal (on Linux or macOS) window, and type:  
<br/>
<div class="codes">adb reboot bootloader</div>
<br/>

You can also boot into fastboot mode via a key combination:  
<p style="margin-left:60px;">🔅With the device powered off, hold <span style="background-color:black;color:white;padding:5px">Volume Down</span> + <span style="background-color:black;color:white;padding:5px">Power</span>.</p>
4.Once the device is in fastboot mode, verify your PC finds it by typing:
<br/><br/>
<div class="codes">fastboot devices</div>
<br/>

If you don’t get any output or an error:  
<p style="margin-left:60px;">🔅on Windows: make sure the device appears in the device manager without a triangle. Try other drivers until the command above works!</p>
<p style="margin-left:60px;">🔅on Linux or macOS: If you see no permissions fastboot try running fastboot as root. When the output is empty, check your USB cable and port!</p>
Now type the following command to unlock the bootloader:
<br/><br/>
<div class="codes">fastboot oem unlock-go</div>
<br/>
<div style="color: #005c77;background-color: #cceffa;padding:10px;">ℹ️Note: At this point the device may display on-screen prompts which will require interaction to continue the process of unlocking the bootloader. Please take whatever actions the device asks you to to proceed.</div>
<br/>

6.If the device doesn’t automatically reboot, reboot it. It should now be unlocked.  
7.Since the device resets completely, you will need to re-enable USB debugging to continue.  
<br/><br/>

# Installing a custom recovery using <span style="color:#ec3b77;">fastboot</span>  
<br/>
1.Download Lineage Recovery. Simply download the latest recovery file, named something like lineage-18.1-20220519-recovery-zl1.img.
2.Connect your device to your PC via USB.
3.On the computer, open a command prompt (on Windows) or terminal (on Linux or macOS) window, and type:
<br/><br/>
<div class="codes">adb reboot bootloader</div>
<br/>
You can also boot into fastboot mode via a key combination:
<p style="margin-left:60px;">🔅With the device powered off, hold <span style="background-color:black;color:white;padding:5px">Volume Down</span> + <span style="background-color:black;color:white;padding:5px">Power.</span></p>
4.Once the device is in fastboot mode, verify your PC finds it by typing:
<br/><br/>
<div class="codes">fastboot devices</div>
<br/>
If you don’t get any output or an error:
<p style="margin-left:60px;">🔅on Windows: make sure the device appears in the device manager without a triangle. Try other drivers until the command above works!</p>
<p style="margin-left:60px;">🔅on Linux or macOS: If you see no permissions fastboot try running fastboot as root. When the output is empty, check your USB cable and port!</p>
<br/>
<div style="color: #1d451f;background-color: #d7e7d8;padding:15px;">✅Tip: Some devices have buggy USB support while in bootloader mode, if you see fastboot hanging with no output when using commands such as fastboot getvar ..., fastboot boot ..., fastboot flash ... you may want to try a different USB port (preferably a USB Type-A 2.0 one) or a USB hub.</div>
<br/>
5.Flash recovery onto your device (replace <recovery_filename> with the actual filename!):
<br/><br/>
<div class="codes">fastboot flash recovery <recovery_filename>.img</div>
<br/>
    Now reboot into recovery to verify the installation. Do not reboot into the existing OS, since it will overwrite the recovery you just installed!
<p style="margin-left:60px;">🔅With the device powered off, hold <span style="background-color:black;color:white;padding:5px">Volume Up</span> + <span style="background-color:black;color:white;padding:5px">Power</span>.</p>
<br/>
<div style="color: #005c77;background-color: #cceffa;padding:10px;">ℹ️Note: If you can’t power down the device, try long-pressing the key-combination (if any was used in the instructions above) until the device reboots and follow the instructions above</div>
<br/>

# Installing LineageOS from <span style="color:#ec3b77;">recovery</span>

1.Download the LineageOS installation package that you would like to install or build the package yourself.
<p style="margin-left:60px;">🔅(Optionally): If you want to install an application package add-on such as Google Apps (use the arm64 architecture), please read and follow the instructions on Google Apps page</p>

2.If you are not in recovery, reboot into recovery:  
<p style="margin-left:60px;">🔅With the device powered off, hold <span style="background-color:black;color:white;padding:5px">Volume Up</span> + <span style="background-color:black;color:white;padding:5px">Power</span>.</p>

3.Now tap Factory Reset, then Format data / factory reset and continue with the formatting process. This will remove encryption and delete all files stored in the internal storage, as well as format your cache partition (if you have one).  
4.Return to the main menu.  
5.Sideload the LineageOS .zip package:
<p style="margin-left:60px;">🔅On the device, select “Apply Update”, then “Apply from ADB” to begin sideload.</p>
<p style="margin-left:60px;">🔅On the host machine, sideload the package using: adb sideload filename.zip.</p>
</br>
<div style="color: #1d451f;background-color: #d7e7d8;padding:15px;">✅Tip: Normally, adb will report Total xfer: 1.00x, but in some cases, even if the process succeeds the output will stop at 47% and report adb: failed to read command: Success. In some cases it will report adb: failed to read command: No error or adb: failed to read command: Undefined error: 0 which is also fine.</div>
</br>

6.(Optionally): If you want to install any add-ons, repeat the sideload steps above for those packages in sequence.

</br>
<div style="color: #005c77;background-color: #cceffa;padding:10px;">ℹ️Note: Add-ons aren’t signed with LineageOS’s official key, and therefore when they are sideloaded, Lineage Recovery will present a screen that says Signature verification failed, this is expected, please click Continue.</div>
</br>
<div style="color: #005c77;background-color: #cceffa;padding:10px;">ℹ️Note: If you want the Google Apps add-on on your device, you must follow this step before booting into LineageOS for the first time!</div>
</br>

7.Once you have installed everything successfully, click the back arrow in the top left of the screen, then “Reboot system now”.

</br>
<div style="color: #005c77;background-color: #cceffa;padding:10px;">ℹ️Note: The first boot usually takes no longer than 15 minutes, depending on the device.</div>
</br>