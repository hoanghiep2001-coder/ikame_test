function mraidFixInstall(){
    if (sys.os == sys.OS.IOS || sys.os == sys.OS.OSX) {
        mraid.open("https://itunes.apple.com/us/app/id6475570212?mt=8");
        return; 
    }

    mraid.open("https://play.google.com/store/apps/details?id=com.mergemaster.mergerobo");
}