import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/services/api/user/new.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(private news: NewService) { }
  NewDto:any
  ngOnInit(): void {
    this.news.getAllNews().subscribe(res=>{
      this.NewDto =res
    })
  }
  p = 1;
  discounts = [
    {
      id:'1',
      image:'https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
    },
    {
      id:'2',
      image:'https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
    },
    {
      id:'3',
      image:'https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
    },  {
      id:'4',
      image:'https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
    },
    {
      id:'5',
      image:'https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
    },  {
      id:'6',
      image:'https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg'
    },
  ]
}
