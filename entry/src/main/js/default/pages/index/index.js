export default {
    data: {
        //      I M A G E S
        bg: "/common/images/bg.png",
        wifi: "/common/images/wifi.png",
        apps: "/common/images/apps.png",
        lock: "/common/images/lock.png",
        location: '/common/images/location.png',
        weather: '/common/images/weather.png',
        scroll_inactive: '/common/images/scroll_inactive.png',
        time_bg: "/common/images/time_bg.png",
        music_bg: "/common/images/music_bg.png",
        storage_bg: "/common/images/storage_bg.png",
        tap_to_speak_bg: "/common/images/tap_to_speak_bg.png",
        refrigerator_doors_bg: "/common/images/refrigerator_doors_bg.png",
        recepie_bg: "/common/images/recepie_bg.png",
        bottom_tab_bg: "/common/images/bottom_tab_bg.png",
        shuffle: '/common/images/shuffle.png',
        back: '/common/images/back.png',
        play: '/common/images/play.png',
        next: '/common/images/next.png',
        range: '/common/images/range.png',
        vegetables_range_white: '/common/images/vegetables_range_white.png',
        green_range: '/common/images/green_range.png',
        orange_range: '/common/images/orange_range.png',
        violet_range: '/common/images/violet_range.png',
        microphone: '/common/images/microphone.png',
        clock: '/common/images/clock.png',
        favourite_active: '/common/images/favourite_active.png',
        favourite_inactive: '/common/images/favourite_inactive.png',
        home_icon: '/common/images/home.png',
        storage_icon: '/common/images/storage.png',
        music_icon: '/common/images/music.png',
        settings_icon: '/common/images/settings.png',
        view_icon: '/common/images/view_icon.png',
        add_icon: '/common/images/add_icon.png',
        pink_button: '/common/images/pink_button.png',

        //      T E X T
        storage_settings:'Storage Settings',
        dinner_text:'Dinner Recepies for you',
        all_recp_text:'All Recepies',
        food_remain: 'Food Remaining',
        home_txt: "Home",
        storage_txt: "Storage",
        music_txt: "Music",
        settings_txt: "Settings",
        audio_assist1:"How can I help you?",
        audio_assist2:"Tap to Speak",
        your_storage:"Your Storage",
        view_text:"View",
        add_text:"Add",
        door_text:"Refrigerator Doors",
        time:"",
        day_date:"",

        //      Device Details
        username: 'UserName',
        location_city:"Bangalore",
        //day_date:"Wednesday, 17 Dec",
        temp_red:"30°",

        //      Music Information
        music_cover_image:'/common/images/dreams_img.png',
        song_name: 'Dreams',
        song_genre: 'Romantic',

        //      Food Remaining tab
        vegetable_percentage:"72%",
        fruits_percentage:"50%",
        meat_percentage:"20%",

        //      Storage Setting Items
        st_items :[{img_path: '/common/images/chicken.png',food_name:"Fresh Chicken",item_weight:"1kg"},
                    {img_path:'/common/images/vegetables.png',food_name:"Vegetables",item_weight:"3kg"},
                    {img_path:'/common/images/spinach.png',food_name:"Spinach",item_weight:"500g"},
                    {img_path:'/common/images/fruits.png',food_name:"Fruits",item_weight:"3kg"},
                    {img_path:'/common/images/fruits.png',food_name:"Milk",item_weight:"2lts"}],

        //      Refrigeator Settings
        door_status:"Locked",
        door_status_toggle:"Unlock",
        superfreeze_toggle_txt:"On",
        superfreeze_toggle_txt_bool:"",
        bottom_box_left_toggle_text: "Freeze",
        bottom_box_right_toggle_text: "Fresh",
        crisp_fresh_toggle_txt:"On",
        crisp_fresh_toggle_txt_bool:"",


        //      Recepie 1 Information
        recp_1_image: '/common/images/vada.png',
        recp_1_name:"Vada",
        recp_1_time:"30 Mins",
        recp_1_type:"Starters",
        recp_1_user_reaction:"false",

        //      Recepie 2 Information
        recp_2_image: '/common/images/meals.png',
        recp_2_name:"Meals",
        recp_2_time:"45 Mins",
        recp_2_type:"Main Course",
        recp_2_user_reaction:"true",

        //      Recepie 3 Information
        recp_3_image: '/common/images/dosa.png',
        recp_3_name:"Dosa",
        recp_3_time:"15 Mins",
        recp_3_type:"Main Course",
        recp_3_user_reaction:"false",

    },
    onInit() {
        setInterval(this.date_time_calc,1000);

        if(this.superfreeze_toggle_txt == "On"){
            this.superfreeze_toggle_txt_bool="true";
        }
        else{
            this.superfreeze_toggle_txt_bool="false";
        }

        if(this.crisp_fresh_toggle_txt == "On"){
            this.crisp_fresh_toggle_txt_bool="true";
        }
        else{
            this.crisp_fresh_toggle_txt_bool="false";
        }


    },

    getRecipeList(e){
      this.st_items;
    },

    date_time_calc(e){
        //      Getting Local time in UTC and convert it into IST
        var today = new Date();
        var hr = today.getHours() + 5;
        var min = today.getMinutes() +30;
        var ampm="PM";
        if(hr>12){hr=hr-12;}
        else{ampm="AM";}

        if (min>=60){
            hr = hr+1;
            min = min-60;

        }
        if (min<10){min = "0" + min;}
        this.time = hr + ":" + min + " " + ampm;

        //      Getiing Local Day and date
        var d = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var day_num = d.getDay();
        var day=days[day_num];
        var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        var month_num = d.getMonth();
        var month = months[month_num];
        this.day_date = day+", "+d.getDate()+" "+month;

    },
    superfreeze_onSwitchChange(e){
        if(e.checked){
            this.superfreeze_toggle_txt = "On";
        }
        else{
            this.superfreeze_toggle_txt = "Off";
        }
    },

    crispfresh_onSwitchChange(e){
        if(e.checked){
            this.crisp_fresh_toggle_txt = "On";
        }
        else{
            this.crisp_fresh_toggle_txt = "Off";
        }
    },
    door_lock_onclick(e){
        if(this.door_status == "Locked"){
            this.door_status="Unlocked";
            this.door_status_toggle="Lock";
        }
        else if(this.door_status == "Unlocked"){
            this.door_status="Locked";
            this.door_status_toggle="Unlock";
        }
    }
}
