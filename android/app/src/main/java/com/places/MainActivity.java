package com.places;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.places.modules.SplashScreen.SplashScreenModule;

public class MainActivity extends ReactActivity {

  protected void onCreate(Bundle savedInstance) {
    // Call before `super.onCreate`
//    setTheme(R.style.AppTheme);
    SplashScreenModule.show(this);

    super.onCreate(savedInstance);
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Places";
  }
}
