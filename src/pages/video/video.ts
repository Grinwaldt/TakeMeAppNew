import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import {DomSanitizer} from '@angular/platform-browser';

// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private youtube: YoutubeVideoPlayer,private videoPlayer: VideoPlayer,public  sanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
//     this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
// console.log('video completed');
// }).catch(err => {
// console.log(err);
// });

    const url="https://www.youtube.com/watch?v=DA0HAhgQCz4&list=PLBcT29Hg53cw7YhDXFSZ-WY1SLdZnjY07&index=10";
    const id =this.getVideoIdFromUrl(url);
    console.log('ionViewDidLoad VideoPage');
    // this.youtube.openVideo('pveNYEim1Gw');
    //this.youtube.openVideo('rhQmy93LZH8');

  }
  private getVideoIdFromUrl(videoUrl){
    const re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    const id = videoUrl.match(re)[7];
    return id;
  }
}
