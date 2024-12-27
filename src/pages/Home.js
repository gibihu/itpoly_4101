import React from "react";

export default function Home() {
    const people = [
        {
        name: 'MissMayulee Chailangka',
        description: "นางสาวมยุลีย์ พงษ์บุพศิริกุล <br> หัวหน้าสาขางานเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg'
        },
        {
        name: 'MissNutthakan Pirom',
        description: "นางสาวณัฐกานต์ ภิรมณ์ <br> รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
        },
        {
        name: 'MissSawitta Pratoom',
        description: "นางสาวสวิตตา ประทุม <br> ครูเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
        },
        {
        name: 'MissThunyalak Kuntha',
        description: "นางสาวธัญญลักษณ์ กันธะ <br> ครูเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10421.jpg'
        },
        {
        name: 'Mr.Paisan N.Lampang',
        description: "นางสาวสวิตตา ประทุม <br> ครูเทคโนโลยีสารสนเทศ",
        img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
        },
    ];
    return(
    <div>
        <div class="m-5">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="order-2 md:order-1 m-4 flex flex-col gap-2 text-start">
                    <span class="text-2xl font-bold text-teal-500">ยินดีต้อนรับเข้าสู่สาขาเทคโนโลยัสารสนเทศ</span>
                    <div class="">สาขาเทคโนโลยีสารสนเทศ นำทีมโดย อ.สุรชัย เจริญศรี, อ.เทวฤทธิ์ วงค์ฉายา และ อ.ปรเมษ เวชสนิท นำนักศึกษาเข้าร่วมการแข่งขันทักษะวิชาชีพ ในระดับจังหวัดเชียงใหม่  ณ วิทยาลัยเทคนิคเชียงใหม่ วันที่ 12 พ.ย. 2567 ผลการแข่งขัน</div>
                </div>
                <div class="order-1 md:order-2 grid grid-cols-2 justify-center gap-2 w-full h-full">
                    <img class="w-full h-full object-cover" src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/465985343_1089521756507249_4254757350376348131_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=g5z8bfjwShEQ7kNvgFtaYy9&_nc_oc=AdjuLiQJFI51Z99_t3NlI0IaOItITQQVj8BUPDApRfW8aLEY6iqO_5-k-yHdMcP0qOg&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=Aj4DVCgj33QPXk0mIYUAeAZ&oh=00_AYDGdoDE8tp70Po6c8jAwx3QRpKa9TDAUISTH5GLDrhJTA&oe=6773EDD4" />
                    <img class="w-full h-full object-cover" src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/464373032_1002235891939428_2507061171253843575_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=o02WRoInJH0Q7kNvgFAENV0&_nc_oc=AdgItkZz5fmPS0__tVcYI8e2lb7SOc06EOKz_YiQ1ZUggyvxX2ozIanxJfANZczCO80&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=APYObVk3XZEAQ6xCbG4K6iD&oh=00_AYBhwGaqBNYVWNnO0vZeQjMuj0a2UTaims3xDhBPUali1Q&oe=677409C8" />
                    <img class="w-full h-full object-cover" src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/462762727_1042217804366332_6924270420314922745_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p2nNwIDwnLMQ7kNvgF1Pg19&_nc_oc=AdgyYM7tBk7EzABurigWVkWHRQhEsh7Cl7acJVxbW0VZHJn-iPJC4fRqV78Hbu5fXfw&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=APYObVk3XZEAQ6xCbG4K6iD&oh=00_AYBVfKjNCrKGEHcMiQCsap61agOYy_SL2vk84xujf2F-hQ&oe=6774014C" />
                    <img class="w-full h-full object-cover" src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/461864390_1035376998383746_4712931508231163866_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kqeswwLNrKkQ7kNvgF_2maX&_nc_oc=AdjSectX4huJXkhkhsJ0qBP03ydVQtvFfDTIX6aB6Q6NhK4DD5zmuK6N0UpCbqRyEM0&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=APYObVk3XZEAQ6xCbG4K6iD&oh=00_AYBk8EGJ7ag2DS2S2zvF139YB8DFqaIP1pUFDxgG05F4sQ&oe=67741042" />
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
            {people.map((person) => (
                <div className="col-span-1">
                    <Card
                        name={person.name}
                        description={person.description}
                        img={person.img}
                    />
                </div>
            ))}
        </div>
    </div>
    );
}

function Card({name, description, img}){
    return(
        <div className="flex items-start gap-4 transition hover:scale-105 hover:rotate-1 hover:bg-zinc-200 p-2 rounded m-2">
            <img
                src={img}
                alt={name}
                className="size-20 rounded-lg object-cover"
            />
            <div className="text-start">
                <h3 className="text-lg/tight font-medium text-gray-900">{name}</h3>
                <p className="mt-0.5 text-gray-700"> {description} </p>
            </div>
        </div>
    );
}