import axios from 'axios';

const API_URL = 'https://sv.vaa.edu.vn/dang-ky-hoc-phan.html';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://sv.vaa.edu.vn',
  'Referer': 'https://sv.vaa.edu.vn/dang-ky-hoc-phan.html',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
  'X-Requested-With': 'XMLHttpRequest',
  'Cookie':
  'ASC.AUTH=281E389B18FA683FB83127126EA388D16A442670FD77F96EB5E0BC2FAAE2552420AD5298869649660D50D1AA6D5191F39354E1ACA01AB9B457EA6259A9EF7AA06679D0247019ADD3D44B93B9D7631E1370B3A513547E0DA1D174B6F9A36F60986190F3076B4E3CBB34FBDD134BBE9884190EC98AC26DA815A66C7AEBEEC578FA; ASP.NET_SessionId=xmdql22axbi14hmdguzensu2',

  
};

const danhSachLopHocPhan = [
  {
    'param[IDDotDangKy]': 43,
    'param[IDLoaiDangKy]': 1,
    'param[GuidIDLopHocPhan]': '5-xwpJZaQVxetejOz8O_RA',
    'param[IDNhomThucHanh]': '',
  },
  {
    'param[IDDotDangKy]': 43,
    'param[IDLoaiDangKy]': 1,
    'param[GuidIDLopHocPhan]': 'bOhm0CEA6rzvmlwSxZ7QRg',
    'param[IDNhomThucHanh]': '',
  },
  {
    'param[IDDotDangKy]': 43,
    'param[IDLoaiDangKy]': 1,
    'param[GuidIDLopHocPhan]': 'Fa6jkHlr88_yWPD3yUG3Lw',
    'param[IDNhomThucHanh]': '',
  },
  {
    'param[IDDotDangKy]': 43,
    'param[IDLoaiDangKy]': 1,
    'param[GuidIDLopHocPhan]': 'x7Mkx5PFUVI7_P4JYFZKYA',
    'param[IDNhomThucHanh]': '',
  },
  {
    'param[IDDotDangKy]': 43,
    'param[IDLoaiDangKy]': 1,
    'param[GuidIDLopHocPhan]': 'Gc9MnKKzax81J_dgB-54FQ',
    'param[IDNhomThucHanh]': '',
  },
];

async function dangKyLopHocPhan(lopHocPhan: any) {
  try {
    const response = await axios.post(API_URL, lopHocPhan, { headers });

    // Kiểm tra trường "Code" trong response
    if (response.data.Code === '00') { 
      console.log(
        `Đăng ký lớp ${lopHocPhan['param[GuidIDLopHocPhan]']} thành công!`
      );
    } else {
      console.error(
        `Đăng ký lớp ${lopHocPhan['param[GuidIDLopHocPhan]']} thất bại: ${response.data.ExceptionMessage}`
      );
    }
  } catch (error) {
    console.error(
      `Đăng ký lớp ${lopHocPhan['param[GuidIDLopHocPhan]']} thất bại:`,
      error
    );
  }
}

async function dangKyHangLoat() {
  for (const lopHocPhan of danhSachLopHocPhan) {
    await dangKyLopHocPhan(lopHocPhan);
  }
}

dangKyHangLoat();