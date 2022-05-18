import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { Category } from '../product/cate.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  category: Category[] = [
    new Category(1, 'Latte Series'),
    new Category(2, 'Thức uống đặc biệt'),
    new Category(3, 'Trà sữa'),
    new Category(4, 'Trà nguyên chất'),
    new Category(5, 'Thức uống sáng tạo'),
    new Category(6, 'Thức uống đá xay'),
    new Category(7, 'Topping'),
  ];
  products: Product[] = [
    //LATTE SERIES
  new Product(
    0,
    'Toffee Black Tea Latte',
    53000,
    'https://gongcha.com.vn/wp-content/uploads/2022/03/LATTE-TOFFEE-1.png',
    'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
    'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
      'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
      ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',1
  ),
  new Product(
      1,
      'Creme Brulee Matcha',
      61000,
      'https://gongcha.com.vn/wp-content/uploads/2022/01/matcha-creme-brulee.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',1
    ),
    new Product(
      2,
      'Creme Brulee Latte',
      69000,
      'https://gongcha.com.vn/wp-content/uploads/2022/01/creme-brulee-late.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',1
    ),
    new Product(
      3,
      'Đào Latte',
      61000,
      'https://gongcha.com.vn/wp-content/uploads/2021/12/Latte-Dao.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',1
    ),
    new Product(
      4,
      'Sữa Tươi Long Nhãn Táo Đỏ',
      53000,
      'https://gongcha.com.vn/wp-content/uploads/2019/06/Sua-Tuoi-Long-Nhan.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',1
    ),
    new Product(
      5,
      'Sữa Tươi Okinawa',
      53000,
      'https://gongcha.com.vn/wp-content/uploads/2018/06/Hinh-Web-OKINAWA-LATTE.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',1
    ),
    new Product(
      6,
      'Dâu Latte',
      59000,
      'https://gongcha.com.vn/wp-content/uploads/2018/08/Strawberry-Earl-grey-latte.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',1
    ),


    //Thức uống đặc biệt//
    new Product(
      7,
      'Creme Brulee Tea',
      49000,
      'https://gongcha.com.vn/wp-content/uploads/2022/01/tra-den-creme-brulee.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',2
    ),
    new Product(
      8,
      'Trà Bí Đao Gong Cha',
      53000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-Milkfoam-2.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',2
    ),
    new Product(
      9,
      'Trà Oolong Gong Cha',
      53000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-Milkfoam-3.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',2
    ),
    new Product(
      10,
      'Trà Alisan Gong Cha',
      61000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Alisan-Milkfoam-2.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',2
    ),
    new Product(
      11,
      'Trà Đen Gong Cha',
      57000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-%C4%90en-Milkfoam-2.png',
      'Một trong những dòng thức uống nổi bật với nhiều lựa chọn độc đáo. Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',2
    ),
    new Product(
      12,
      'Trà Xanh Gong Cha',
      49000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tra%CC%80-xanh-GC.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',2
    ),


    //Trà sữa


    new Product(
      13,
      'Toffee Chocolatea',
      61000,
      'https://gongcha.com.vn/wp-content/uploads/2022/03/CHOCOLATE-TOFFEE-1.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),


    new Product(
      14,
      'Strawberry Milk Tea',
      59000,
      'https://gongcha.com.vn/wp-content/uploads/2022/01/Strawberry-milk-tea.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      15,
      'Creme Brulee Milk Tea',
      63000,
      'https://gongcha.com.vn/wp-content/uploads/2022/01/tra-sua-creme-brulee.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),

    new Product(
      16,
      'Trà Sữa Đào',
      55000,
      'https://gongcha.com.vn/wp-content/uploads/2021/12/Tra-Sua-Dao.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      17,
      'Okinawa Oreo Cream Milk Tea',
      59000,
      'https://gongcha.com.vn/wp-content/uploads/2019/11/Okinawa-Milk-Foam-Smoothie.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      18,
      'Trà Sữa Xoài Trân Châu Đen',
      59000,
      'https://gongcha.com.vn/wp-content/uploads/2019/06/Mango-Milktea.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      19,
      'Trà Sữa Okinawa',
      67000,
      'https://gongcha.com.vn/wp-content/uploads/2018/10/Hinh-Web-OKINAWA-TR%C3%80-S%E1%BB%AEA.png',
      'Vị trà Xanh (Lục Trà) thơm nhẹ và thanh mát, hòa cùng lớp kem sữa mặn.Đặc biệt với Trà sữa Oolong 3J, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      20,
      'Trà Sữa Matcha Đậu Đỏ',
      59000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Matcha-%C4%91%E1%BA%ADu-%C4%91%E1%BB%8F-2.png',
      'Vị chát của trà xanh Nhật Bản (Matcha) pha chút ngọt ngào của sữa dùng kèm Đậu Đỏ bùi và béo sẽ làm bạn bất ngờ, Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      21,
      'Trà sữa Oolong 3J',
      67000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Oolong-3J-2.png',
      'Trà sữa Oolong đậm đà được dùng kèm với trân châu dai dai, Pudding trứng béo ngọt và Sương sáo thanh mát., Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),

    new Product(
      22,
      'Trà Sữa Pudding Đậu Đỏ',
      53000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Pudding-%C4%91%E1%BA%ADu-%C4%91%E1%BB%8F-2.png',
      'Trà Sữa Trà Đen kết hợp cùng Topping Đậu đỏ ngọt ngào cùng Pudding trứng mềm mại.Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      23,
      'Trà Sữa Chocolate',
      61000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Chocolate-2.png',
      'Trà Sữa Trà Đen kết hợp cùng Topping Đậu đỏ ngọt ngào cùng Pudding trứng mềm mại.Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      24,
      'Trà Sữa Trân Châu Đen',
      49000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Tr%C3%A2n-ch%C3%A2u-%C4%91en-1.png',
      'Trà Sữa Trà Đen kết hợp cùng Topping Đậu đỏ ngọt ngào cùng Pudding trứng mềm mại.Trà sữa pudding đậu đỏ với topping đa dạng mang đậm bản sắc Đài Loan.Loại trà đặc trưng của vùng đồi núi Alisan ở Đài Loan, hương trà thơm hòa quyện cùng lớp kem sữa mặn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      25,
      'Trà Sữa Hokkaido',
      57000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Hokkaido-2.png',
      'Vị kẹo bơ cứng (Toffee) hòa quyện với trà sữa Earl Grey tạo nên mùi thơm đặc trưng của Hokkaido.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      26,
      'Trà Sữa Sương Sáo',
      57000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-s%C6%B0%C6%A1ng-s%C3%A1o.png',
      'Trà Sữa Trà Đen kết hợp cùng Topping Sương sáo thanh mát.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      27,
      'Trà sữa Oolong',
      49000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Oolong-2.png',
      'Vị trà Oolong đậm đà cùng hương thơm đặc trưng được hòa chung với sữa đem lại hương vị nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),

    new Product(
      28,
      'Trà sữa Trà Đen',
      46000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-tr%C3%A0-%C4%91en-3.png',
      'Vị trà Đen (Hồng Trà) đậm đà quen thuộc pha chung với sữa tạo nên mùi vị thơm ngon.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),

    new Product(
      29,
      'Trà sữa Trà Xanh',
      46000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-tr%C3%A0-xanh-1.png',
      'Trà Xanh nguyên chất (Lục Trà) được pha với sữa làm nên món trà sữa thanh mát thơm nhẹ.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),
    new Product(
      30,
      'Trà sữa Khoai Môn',
      53000,
      'https://gongcha.com.vn/wp-content/uploads/2018/01/Tr%C3%A0-s%E1%BB%AFa-Khoai-m%C3%B4n-2.png',
      'Hương vị Khoai Môn được hòa cùng với sữa tạo nên thức uống thơm béo.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',3
    ),

    //Trà Nguyên Chất

    new Product(
      31,
      'Trà Bí Đao Alisan',
      42000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-Alisan-2.png',
      'Trà bí đao ngọt ngào kết hợp với trà Alisan, cho ra ly trà thơm, ngọt dịu dễ uống.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',4
    ),

    new Product(
      32,
      'Trà Bí Đao',
      42000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-2.png',
      'Trà bí đao ngọt ngào, thanh mát, giúp giải nhiệt tốt.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',4
    ),

    new Product(
      33,
      'Trà Alisan',
      50000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Alisan-2.png',
      'Trà bí đao ngọt ngào, thanh mát, giúp giải nhiệt tốt.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',4
    ),

    new Product(
      34,
      'Trà Oolong',
      42000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-2.png',
      'Vị trà đậm và có mùi thơm đặc trưng.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',4
    ),

    new Product(
      35,
      'Trà Đen',
      39000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-%C4%90en-2.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',4
    ),

    new Product(
      36,
      'Trà Xanh',
      47000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Xanh-2.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',4
    ),

    //Thức uống sáng tạo
    new Product(
      37,
      'Strawberry Choco Milk Tea',
      47000,
      'https://gongcha.com.vn/wp-content/uploads/2022/02/Strawberry-Chocolate-Milk-Tea.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    new Product(
      38,
      'Strawberry Choco Smoothie',
      58000,
      'https://gongcha.com.vn/wp-content/uploads/2022/02/Strawberry-Chocolate-Smoothie.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),
    new Product(
      39,
      'Trà Đen Đào',
      51000,
      'https://gongcha.com.vn/wp-content/uploads/2021/12/Tra-Den-Dao.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    new Product(
      40,
      'Trà Xanh Đào',
      59000,
      'https://gongcha.com.vn/wp-content/uploads/2021/12/Tra-Xanh-Dao.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    new Product(
      41,
      'Trà Oolong Long Nhãn Táo Đảo',
      52000,
      'https://gongcha.com.vn/wp-content/uploads/2019/06/Oolong-Long-Nhan.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    new Product(
      42,
      'Trà Xanh Long Nhãn Táo Đảo',
      52000,
      'https://gongcha.com.vn/wp-content/uploads/2019/06/Tra-Xanh-Long-Nhan.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    new Product(
      43,
      'Trà Oolong Vải',
      49000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Oolong-v%E1%BA%A3i-2.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    new Product(
      44,
      'Trà Alisan Vải',
      49000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Alisan-v%E1%BA%A3i-2.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    new Product(
      45,
      'Trà Alisan Xoài',
      49000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Alisan-xo%C3%A0i-2.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',5
    ),

    //THỨC UỐNG ĐÁ XAY


    new Product(
      46,
      'Toffee Oolong Smoothie',
      52000,
      'https://gongcha.com.vn/wp-content/uploads/2022/03/DA-XAY-TOFFEE-1.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      47,
      'Strawberry Cookie Smoothie',
      65000,
      'https://gongcha.com.vn/wp-content/uploads/2022/01/strawberry-cookie-smoothie.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      48,
      'Yakult Đào Đá Xay',
      65000,
      'https://gongcha.com.vn/wp-content/uploads/2021/12/Yakult-Dao-Da-Xay.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      49,
      'Okinawa Milk Foam Smoothie',
      65000,
      'https://gongcha.com.vn/wp-content/uploads/2019/11/Okinawa-Oreo-Cream-Milk-Tea.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      50,
      'Strawberry Oreo Smoothie',
      63000,
      'https://gongcha.com.vn/wp-content/uploads/2018/08/Strawberry-Oreo-Smoothie.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      51,
      'Chocolate Đá Xay',
      63000,
      'https://gongcha.com.vn/wp-content/uploads/2018/08/Strawberry-Oreo-Smoothie.png',
      'Vị trà Đen (Hồng Trà) đặc trưng, đậm trà và thơm nồng nàn.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      52,
      'Khoai Môn Đá Xay',
      65000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Khoai-m%C3%B4n-%C4%91%C3%A1-xay-2.png',
      'Khoai môn ngọt ngào được xay chung với sữa, có thể dùng kèm với Kem (Whipping Cream) hoặc Trân Châu Đen.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      53,
      'Matcha Đá Xay',
      65000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Matcha-%C4%91%C3%A1-xay-2.png',
      'Matcha xay cùng với sữa, kết hợp với lớp Kem (Whipping Cream) phía trên.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      54,
      'Yakult Đào Đá Xay',
      65000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Yakult-%C4%91%C3%A1-xay-2.png',
      'Sữa Yakult xay cùng với hương Đào thơm ngọt, cho ra ly đá xay ngon miệng vừa có chua, có ngọt, vừa tốt cho sức khỏe, dùng kèm với Thạch Trái cây.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

    new Product(
      55,
      'Xoài Đá Xay',
      65000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Xo%C3%A0i-%C4%91%C3%A1-xay-2.png',
      'Vị xoài ngọt ngào dùng kèm với Thạch Dừa dai và thơm,cho ra ly đá xay ngon miệng vừa có chua, có ngọt, vừa tốt cho sức khỏe, dùng kèm với Thạch Trái cây.',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',6
    ),

      //TOPING
    new Product(
      56,
      'Kem Sữa',
      16000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/Kem-S%E1%BB%AFa.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      57,
      'Nha Đam',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/Nha-%C4%90am.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      58,
      'Hạt É',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/H%E1%BA%A1t-%C3%89.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      59,
      'Trân Châu Đen',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/Tr%C3%A2n-Ch%C3%A2u-%C4%90en.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),
    
    new Product(
      60,
      'Trân Châu Trắng',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/Tr%C3%A2n-Ch%C3%A2u-Tr%E1%BA%AFng.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      61,
      'Đậu Đỏ',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/%C4%90%E1%BA%ADu-%C4%90%E1%BB%8F.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      62,
      'Sương sáo',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/S%C6%B0%C6%A1ng-s%C3%A1o.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      63,
      'Thạch Trái Cây',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/Th%E1%BA%A1ch-tr%C3%A1i-c%C3%A2y.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      64,
      'Thạch Dừa',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/Th%E1%BA%A1ch-D%E1%BB%ABa.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      65,
      'Pudding',
      10000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/%E5%B8%83%E4%B8%81-pudding.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),

    new Product(
      66,
      'Combo 2 loại hạt',
      20000,
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Combo2loaihat-2.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),
    new Product(
      67,
      'Combo 3 loại hạt',
      20000,
      'https://gongcha.com.vn/wp-content/uploads/2018/03/Combo-3-lo%E1%BA%A1i-h%E1%BA%A1t.png',
      'Gợi ý thức uống kết hợp : Trà Xanh Đào, Trà Alisan Chanh Dây, Trà Alisan Xoài , QQ Chanh Dây Trà Xanh...',
      'Trà bí đao thanh mát, ngọt ngào kết hợp chung với lớp kem sữa mặn.\r' +
        'Sau những thức uống thơm béo thì cơn gió tháng 3 mang đến loạt thức uống chua ngọt, thanh mát để làm mới lại khẩu vị của Fan đây! Trọn bộ thức uống là sự kết hợp giữa mứt trái cây nhiệt đới và các loại trà quen thuộc mang đến 3 sản phẩm mới toanh với giá ưu đãi.\n' +
        ' Khu vực bán sản phẩm: TP.HCM, Hà Nội, Biên Hoà, Long An',7
    ),
];
  p: Product[] = new Array(4);
  constructor(private toastr: ToastrService) {}
  getCate() {
    return this.category;
  }
  getProductsByCate(id: any) {
    return this.products.filter((x) => x.cateid == id);
  }
  getProducts() {
    return this.products;
  }
  getFeatureProducts() {
    for (let index = 0; index < 4; index++) {
      this.p[index] = this.products[index];
    }
    return this.p;
  }
  getProduct(index: number) {
    return this.products.filter((x) => x.id == index)[0];
  }
  getproductsbysearch(searchText: string) {
    return this.products.filter((x) =>
      x.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  updateProduct(index: number, newProduct: Product) {
    console.log(index);
    this.products[index] = newProduct;
    console.log(this.products);
  }
  addProduct(newProduct: Product) {
    let tmpID = false;
    this.products.forEach((i) => {
      if (i.id == newProduct.id) {
        this.toastr.error('ID already exist', 'Failed');
        tmpID = true;
      }
    });
    if (tmpID == false) {
      this.products.push(newProduct);
      console.log(this.products);
    }
  }
  deleteProduct(index: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == index) {
        this.products.splice(i, 1);
        break;
      }
    }
  }
}
