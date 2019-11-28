import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { YoutubeVideoPlayer, YoutubeVideoPlayerOriginal } from '@ionic-native/youtube-video-player';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TasksService } from './services/tasks.service';
import { VideoPage } from '../pages/video/video';
import { ReadingPage } from '../pages/reading/reading';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    VideoPage,
    ReadingPage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    VideoPage,
    ReadingPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    TasksService,
    YoutubeVideoPlayer,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
