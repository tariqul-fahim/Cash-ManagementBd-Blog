import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  businessHeartTxt = '<p><span class="span-bold">ব্যবসায় অনেক বেশি আয় চাই?</span> ব্যবসা মানেই আর্থিক লেনদেন। ব্যবসায়ী হিসেবে আপনিও নিশ্চয় নগদ অর্থ ব্যবহার করেন। শুধু আপনি নন, প্রতিটি ব্যবসা প্রক্রিয়াতেই আর্থিক লেনদেন চলে। একজন ব্যবসায়ীর আর্থিক স্বচ্ছলতা থাকতে পারে। তবে তার অর্থের অনেকটাই হয়তো আপনি কখনো দেখতে পারবেন না। কারণ, ব্যবসায়ী মাত্রই টাকা ব্যবসা কাজে খাটিয়ে অধিক অর্থ আয়ের চিন্তা করে থাকে।</p>' +
    '<p class="p-gap">ব্যবসায়ী নিজের অর্থকে এই যে ব্যবসায়িক কাজে লগ্নি করেন, এটি নানাভাবে হয়ে থাকে। অর্থের এমন অনেক ধরণের মধ্যেই অন্যতম একটি ধরণ হলো- নগদ লেনদেন। টাকা বাজারে পড়ে থাকলে সেটা থেকে লাভ আসে না। তবে আপনি যদি নগদ অর্থ বাজারে পরিচালিত করেন তা থেকে ধীরে ধীরে কয়েক গুণ অর্থ ফিরে আসবে। নগদ অর্থের এই ইতিবাচক দিকের কথা চিন্তা করেই একে পুরো ব্যবসায়িক কার্যক্রমের কেন্দ্রবিন্দু বা হৃৎপিন্ড বলা হয়।</p>' +
    '<p class="p-gap">আমাদের শরীরের প্রত্যেকটি অংশ ভালোভাবে বেচে থাকার জন্য গুরুত্বপূর্ণ। কিন্তু এই সবগুলো অঙ্গই অচল হয়ে পড়ে যদি হৃৎপিন্ড সুস্থ না থাকে। ঠিক তেমনি, ব্যবসা প্রক্রিয়ায় যদি নগদ অর্থ উপস্থিত না থাকে তাহলে পুরো ব্যবসায়িক কার্যক্রমই মুখ থুবড়ে পড়ে।</p>' +
    '<p class="p-gap">এখন প্রশ্ন হলো, আপনি নগদ অর্থ ব্যবসা কার্যে ব্যবহার করলেন। কিংবা, আপনার প্রাত্যাহিক ব্যবসাতেই হয়তো নগদ অর্থের লেনদেন চলে। কিন্তু তারপরও আপনি যে ব্যবসায় সফল হবেন তার নিশ্চয়তা কী? সত্যি বলতে গেলে, এক্ষেত্রে আপনি কখনোই ১০০% নিশ্চয়তা পেতে পারবেন না। কারণ ব্যবসা মানেই ঝুঁকি। তবে হ্যা, আপনার এই ঝুঁকিকেই অনেকটা কমিয়ে শতভাগ না হলেও ৯৯% ব্যবসায়িক সফলতা অর্জন করতে পারেন আপনি। আর এজন্য প্রয়োজন নগদ অর্থের সঠিক ব্যবস্থাপনা বা Cash Management।</p>' +
    '<p class="p-gap">শুনতে একটু কঠিন মনে হলেও ব্যাপারটি কিন্তু একেবারেই সহজ। আপনি যত টাকা আয় করছেন তার চাইতে বেশি টাকা যদি খরচ করে ফেলেন সেক্ষেত্রে অবশ্যই আপনার ব্যবসায় ক্ষতি হবে। অথচ এই ক্ষতি এড়িয়ে চলা সম্ভব যদি আপনি আয় ও ব্যয়ের এই ব্যাপারটিকে আপনি সঠিকভাবে ব্যবস্থাপনা করতে পারেন। এই যেমনঃ রহমান সাহেবের একটি মুদি দোকান আছে। তিনি প্রতিদিন যা আয় করেন তার পুরোটাই কোন কিছু না ভেবে লগ্নি করেন না। ক্রেতার চাহিদা কী, কত টাকা খরচ হচ্ছে, কোন প্রযুক্তি বা পণ্য সবার মনযোগ আকর্ষণ করবে- এই সবকিছু ভেবেই টাকা খাটান তিনি। ব্যবসা মানেই কৌশল। অর্থ ব্যবস্থাপনার এই কৌশলটিই হলো Cash Management।</p>';
  whatItIs = '<p>Cash Management হচ্ছে একটা প্রক্রিয়া যার ভেতর দিয়ে গেলে আপনার ব্যবসায়ের নগদ টাকা বাড়াতে পারবেন।</p>' +
    '<p>টাকা আয় করলেই হয় না, সেটাকে ধরেও রাখতে হয়। আপনি হয়তো এক লক্ষ টাকা আয় করেছেন। কিন্তু সঠিকভাবে সেটাকে খরচ না করলে খুব দ্রুতই আপনার জমা টাকার পরিমাণ হাজারে নেমে আসতে পাতে। নগদ অর্থের এই হিসাব এবং সঠিক ব্যবস্থাপনাকেই Cash Management বলে। তবে ‘ব্যবস্থাপনা’ শব্দটির অর্থ বেশ বড়। এর মধ্যে যেমন কতটুকু আয় বা ব্যয় হচ্ছে সেটা থাকে, তেমনি থাকে প্রতিদিনের বাকি থাকা অর্থের হিসাব, মালামালের হিসাব ইত্যাদিও। সকাল থেকে রাত পর্যন্ত ব্যবসার কাজে ব্যস্ত থাকার পর এই হিসাবটুকু করা বেশ কঠিন হয়ে পড়ে। আর এজন্যই আপনাকে সাহায্য করতে আমরা নিয়ে এসেছি Cash Management।</p>' +
    '<p>Cash Management এর সাথে ব্যবসা করবেন আপনি, আর আপনার ব্যবসার প্রতিদিনের হিসাব দশ মিনিটে দিন শেষেই করে দেবো আমরা। সাথে সপ্তাহ শেষে ব্যবসায়ের রিপোর্ট আর ব্যবসায় আরো বেশি লাভ করার জন্য দরকারি পরামর্শ তো আছেই!</p>';
  whoTakeService = '<p>সকল ক্ষুদ্র ও মাঝারি ধরনের প্রতিষ্ঠান আমাদের সেবা নিতে পারবে।</p>' +
  '<p>আমাদের দেশে বৃহৎ ব্যবসায়ীদের ব্যবসা কাজে সাহায্য করার জন্য নানাবিধ সাহায্যকারী প্রতিষ্ঠান রয়েছে। তবে ছোট ও মাঝারী ব্যবসায়ীদের জন্য অর্থ ব্যবস্থাপনা করা ও লাভবান হওয়া কঠিন হয়ে পড়ে। আর তাই আমাদের এই সেবাটি শুধু ছোট ও মাঝারী সেসব ব্যবসায়ীদের জন্য যারা নগদ লেনদেন, বাকিদের মাল ক্রয় ও বিক্রয়ের সাথে জড়িত আছেন। </p>' +
  '<ul style="margin-left: 40px;">\n' +
    '    <li>ইলেকট্রিকাল পণ্য</li>\n' +
    '    <li>আসবাবপত্র</li>\n' +
    '    <li>ফার্মেসি</li>\n' +
    '    <li>কন্সট্রাকশন</li>\n' +
    '    <li>ফোন ফ্যাক্স, বিকাশ</li>\n' +
    '    <li>মুদি দোকান</li>\n' +
    '    <li>ডিজিটাল ব্যানার ও সাইন ইত্যাদি </li>\n' +
    '  </ul>' +
  '<p>যেকোন ছোট বা মাঝারী ব্যবসায়ের সাথে কি আপনি যুক্ত? একটি স্মার্টফোন বা কম্পিউটার ব্যবহার করে ইন্টারনেটের মাধ্যমে Cash Management এর সাথে এখন দেশের যে কোন প্রান্ত থেকে ব্যবসায়িক ব্যবস্থাপনা ও লাভ নিশ্চিত করতে পারবেন আপনি।</p>';
  whyTakeService = '<p><span class="span-bold">“আপনার ব্যবসায়ের নগদ টাকা বাড়াতে।”</span></p>' +
  '<p>ব্যবসায় লাভ করতে কে না চায়! আপনিও চান মাস শেষে লাভের টাকা নতুনভাবে লগ্নি করতে, ব্যবসাকে বাড়িয়ে তুলতে? খুব কম কষ্টে Cash Management আপনাকে এই ব্যবস্থাই করে দেবে।</p>' +
  '<p>আপনার কষ্টের আয় যেন সঠিকভাবে, সঠিক পরিমাণে ও সঠিক স্থানে ব্যয় হয় সেটা নিশ্চিত করবে Cash Management। একইসাথে ক্রেতার আগ্রহ ও ক্রয়ের পরিমাণ বিচার করে ব্যবসায় উন্নতি করার পদ্ধতিও বলে দেবে। আমরা ছোট ছোট পদক্ষেপের মাধ্যমে বড় সফলতা অর্জনে বিশ্বাসী। ক্রেতাদের নির্ভরতাকে পুঁজি করে গড়ে ওঠা Cash Management বাংলাদেশে প্রথম ও একমাত্র প্রতিষ্ঠান যেটি ছোট ও মাঝারী ব্যবসায়ীদের নগদ অর্থ ব্যবস্থাপনার সুবিধা প্রদান করছে। তাই দেরী না করে দ্রুত আমাদের সঙ্গী হোন!</p>';
  benifitCashManagement = '<p>Cash Management ব্যবহার করে আপনার কী লাভ? এই প্রশ্নটি একজন ব্যবসায়ী হিসেবে আপনার মাথায় আসতেই পারে। অবশ্যই আপনি কোন সেবা গ্রহণ করলে সেটি ব্যবহারের মাধ্যমে সর্বোচ্চ ফলাফল আশা করবেন। আর আমরাও সবার আগে আমাদের ক্রেতাদের সফলতার কথাই মাথায় রাখি। </p>' +
  '<p>আমাদের নিবেদিত ও প্রশিক্ষণপ্রাপ্ত টিম প্রতিদিন আপনাকে লাভবান হওার জন্য উৎসাহ ও পরামর্শ প্রদান করবে। এতে করে আপনি বাকি থাকা টাকাগুলো সহজেই তুলতে পারবেন, নগদ অর্থ কোন স্থানে ও কীভাবে ব্যবহার করবেন এই সংক্রান্ত সিদ্ধান্ত নিতে পারবেন। সঠিক পরিকল্পনার সাথে এগিয়ে যাওয়ার ফলে আপনার ব্যবসার নগদ বিক্রির পরিমাণ বাড়বে। আর একইসাথে আপনার মূল্যবান সময়ও বাঁচবে।</p>';
  whatBenifit = '<p>ব্যবসা থেকে আপনি কী চান? টাকা আয় করতে, গ্রাহকদের যথাযথ সেবা দিতে, ব্যবসাকে আরো বাড়াতে- এই তো? এই সবগুলো কাজই আপনি খুব সহজে করতে পারবেন Cash Management। যেকোন নতুন সেবার প্রথম লক্ষ্যই হলো গ্রাহকদের সন্তুষ্ট করা। কারণ সেবা যদি শতভাগ হয় তাহলে গ্রাহক সেবা গ্রহণ করবেন। এতে করে ব্যবসা সম্প্রসারিত হবে।</p>' +
  '<p>আর তাই আপনি ও আরো অনেক ব্যবসায়ীর মতোই আমাদের মূল লক্ষ্যই হলো আপনাকে শতভাগ সেবা প্রদান করা। এই সেবার মাধ্যমে ধীরে ধীরে গ্রাহকের নির্ভরতার স্থান যদি জয় করে নিতে পারি, সেটাই Cash Management-এর লাভ।</p>' +
  '<p>প্রাথমিক অবস্থায় আমরা অত্যন্ত কম সম্মানীর বদলে সেবা প্রদান করছি। গ্রাহকের সংখ্যা বৃদ্ধির মাধ্যমে আমরা ঠিক এভাবেই কম খরচে সেরা মানের সেবাটি প্রদান করতে চাই। এক বা দশজন নয়, একটা গোটা কমিউনিটি তৈরির মাধ্যমে সেবার মান বজায় রাখা ও সেবার পরিধি সম্প্রসারণ করাই আমাদের লক্ষ্য।</p>';
  descriptions: Question[] = [
    {
      isLeft: true,
      title: 'Cash Management এটা আসলে কি ?',
      img: '../../../assets/images/service.png',
      des: this.whatItIs,
      len: 647
    },
    {
      isLeft: false,
      title: 'কারা এই সেবা নিতে পারবে ?',
      img: '../../../assets/images/whoTakeIt.png',
      des:  this.whoTakeService,
      len: 375
    },
    {
      isLeft: true,
      title: 'কেন এই সেবা নিবেন ?',
      img: '../../../assets/images/whyTakeService.png',
      des: this.whyTakeService,
      len: 242
    },
    {
      isLeft: false,
      title: 'Cash Management থেকে কিভাবে লাভবান হবেন ?',
      img: '../../../assets/images/howBenefit.jpg',
      des: this.benifitCashManagement,
      len: 246
    },
    {
      isLeft: true,
      title: 'Cash Management এর কি লাভ ?',
      img: '../../../assets/images/whatBenefit.png',
      des: this.whatBenifit,
      len: 303
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
