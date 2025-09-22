// TRIỂN KHAI CÁC LỚP.
// 1. Lớp khá giả (Audience)
class Audience{
    static counter=1;
    id:number;
    name:string;
    email:string;
    phone:string;
    constructor(name:string,email:string, phone:string){
        this.id= Audience.counter++;
        this.name= name;
        this.phone=phone;
    }
    getDetail():string{
        return `THông tin khán giả_ Tên: ${this.name}, email: ${this.name}...`
    }
}
// 2. Lớp phim
abstract class Movie{
     static counter=1;
     id: number;
     title:string;
     genre:string; // thể loại phim
     ticketPrice: number; // giá 1 bộ phim
     isShowing:boolean= false; // phim có được công chiếu hay không?
     constructor(title:string, genre:string,ticketPrice:number){
        this.id= Movie.counter++;
        this.title=title;
        this.genre=genre;
        this.ticketPrice=ticketPrice;
     }
     // Các phương thức
     startShow():void{
        this.isShowing= true;
     }
     stopShow():void{
        this.isShowing=false;
     }
     // phương thức tính tổng giá vé
     abstract calculateTicketCost(quantity: number):number;
     // phương thức các ưu đãi đặc biệt
     abstract getSpecialOffers():string[];
     // phương thức trả về thông tin của phim
     abstract getMovieInfo():string;
}
// 3. Tạo các lớp con kế thừa lớp cha
   class ActionMovie extends Movie{

     calculateTicketCost(quantity:number):number{
        return this.ticketPrice*quantity;
     }
     getSpecialOffers():string[]{
        return ["miễn phí bắp rang","tặng poster"];
     }
     getMovieInfo():string{
        return `Tên phim: ${this.title}, giá vé: ${this.ticketPrice} hành động gay cấn...`
     }
   }
    class ComedyMovie extends Movie{

     calculateTicketCost(quantity:number):number{
        let root_price= this.ticketPrice;
        return quantity>4?root_price*0.9*quantity :root_price*quantity;
     }
     getSpecialOffers():string[]{
       return ["Giảm 10% cho nhóm trên 4 người"]
     }
     getMovieInfo():string{
         return `Tên phim: ${this.title}, giá vé: ${this.ticketPrice} phim hài nhẹ nhàng...`
     }
   }
    class AnimationMovie extends Movie{

     calculateTicketCost(quantity:number):number{
        // kiểm tra nếu tuổi <12 thì không thu tiền

        return this.ticketPrice*quantity;
     }
     getSpecialOffers():string[]{
        return ["miễn phí cho trẻ em dưới 12 tuổi"];
     }
     getMovieInfo():string{
        return `Tên phim: ${this.title}, giá vé: ${this.ticketPrice} hình ảnh sống động...`
     }
   }
   // 4. Lớp TicketBooking 
   class TicketBooking{
     static counter=1;
     bookingId:number;
     audience: Audience;
     movie:Movie;
     quantity:number;
     totalPrice:number;
     constructor(audience:Audience,movie:Movie, quantity:number,totalPrice:number){
        this.bookingId= TicketBooking.counter++;
        this.audience=audience;
        this.movie= movie;
        this.quantity=  quantity;
        this.totalPrice= totalPrice;

     }

    getDetail():string{
        return `Thông tin đặt vé: ...`
    }
   }
   // 5. Lớp cinema 
   class Cinema{
    movies: Movie[];
    audiences:Audience[];
    bookings:TicketBooking[];
    // Triển khai các phương thức
    // 1. Thêm khán giả.
    addAudience(name: string, email: string, phone: string): Audience{
        let newAudience= new Audience(name,email,phone);
        this.audiences.push(newAudience);
        return newAudience
    }
    // 2. Thêm phim mới.
    addMovie(movie: Movie): void{
        this.movies.push(movie);// Thêm phim mới
    }
    // 3. Đặt vé
    bookTickets(audienceId: number, movieId: number, quantity: number): TicketBooking | null{
        // Kiểm tra xem tồn tại id khách hàng, id phim
        let findAudienceById= this.audiences.find(item=>item.id===audienceId);
        let findMovieById= this.movies.find(item=>item.id==movieId);
        if(findAudienceById && findMovieById && quantity>0 && findMovieById.isShowing){
           let newBooking= new TicketBooking(findAudienceById,findMovieById, quantity,findMovieById.calculateTicketCost(quantity));
           this.bookings.push(newBooking);
           return newBooking;
        }
        return null;
    }
    
    listShowingMovie(){
        let result = this.movies.filter(item = ClipboardItem.isShowing);
        for(let index = 0; index < result.length; i++){
            console.log("Phim dang chieu .....");
            
        }
    }
   }