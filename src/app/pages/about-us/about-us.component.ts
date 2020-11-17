import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  ourMission = '<p><span class="span-bold">” আপনার ব্যবসায়িক সাফল্য অর্জনের জন্য আমরা পাশে আছি “</span></p>' +
  '<p>গ্রাহকদের সংযুক্ত হওয়ার পর থেকে পুরো সুবিধা পেতে তাকে সহায়তা করার জন্য আমরা সব সময় প্রস্তুত।আমাদের সাফল্য পরিমাপ করা হয় তারা কতটা উত্সাহের সাথে আমাদের প্রচার করে।</p>';
  yourSuccess = '<p><span>আপনার ব্যবসায় পরিচালনার দিকে নজর রাখুন, আমাদের পরামর্শ মেনে চলুন, ব্যবসায়িক সাফল্য আপনার জন্য।</span></p>\n' +
    ' <p>বাংলাদেশে এই ধরনের ব্যতিক্রম ধর্মী সেবা নিয়ে আমরাই প্রথম। বিশ্বের যেকোন প্রান্ত থেকে ইন্টারনেটের মাধ্যমে আমাদের সেবা গ্রহন করতে পারবেন। আমরা সব সময় চেষ্টা করেছি, এবং ভবিষ্যৎতেও চেষ্টা করবো আপনাদের সম্মানীর সর্বোচ্চ সেবা দিতে।</p>\n' +
    ' <p>আমাদের রয়েছে দক্ষ এ্যানালিষ্ট টিম, প্রফেশনাল ফাইন্যান্স, দক্ষ মার্কেটিং টিম ও প্রফেশনাল আইটি পার্টনার। সবার সম্মিলিত প্রচেষ্টাই আমরা Cash Management বা “নগদ ব্যবস্থাপনা”।</p>\n' +
    ' <p>যেহেতু আমরা অনলাইন ভিত্তিক তাই দেশের বিভিন্ন প্রান্ত থেকে আমাদের সদস্যরা যে যার স্থান থেকে নিরলসভাবে কাজ করার সুযোগ পাচ্ছেন। সবার আন্তরিক সহযোগিতা ছাড়া যেটা কখনোই সম্ভব ছিলনা।</p>';
  descriptions: Question[] = [
    {
      isLeft: true,
      title: 'আমাদের মিশন !',
      img: '../../../assets/images/mission.png',
      des: this.ourMission,
      len: 647
    },
    {
      isLeft: false,
      title: 'আপনার সাফল্যের পেছনে আমাদের সেবা...',
      img: '../../../assets/images/service.png',
      des: this.yourSuccess,
      len: 348
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
