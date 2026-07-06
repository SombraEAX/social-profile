<template lang="pug">
.global
    .header
        .header-background-gradient
        .header-background-white
        .header-link-wrapper
            .header-link(@click="copyLink") {{ linkCopied ? 'Copied!' : 'example.com' }}
        .header-main-block
            UiCircle(
                diameter="75"
                border="3px solid #fff"
                shadow="#6B3279"
                height="220"
                offset="3"
                style="z-index:200"
                captionStyle="font-size:14px;font-weight:bold;padding-top:5px"
                caption="vCard"
                background="#FC6F08"
            )
                .vcard-icon
            UiCircle(
                diameter="200"
                border="5px solid #fff"
                shadow="#6B3279"
                height="220"
                offset="4"
                style="margin:0px -20px;z-index:100"
                captionStyle=""
                caption=""
                background="url('/avatar.jpg')"
            )
            UiCircle(
                diameter="75"
                border="3px solid #fff"
                shadow="#6B3279"
                height="220"
                offset="3"
                style="z-index:200;cursor:pointer"
                captionStyle="font-size:14px;font-weight:bold;padding-top:5px"
                caption="QR"
                background="#FC6F08"
                @click="showQR = true"
            )
                .qr-icon
    .title AGENCY:
    .subtitle Bright Horizon
    .right
        .name John
        .surname Doe
        .phones
            .phone
                .phone-icon
                span +1(555) 123-45-67
            .phone
                .phone-icon
                span +1(555) 123-45-67
    .socials
        .social
            .social-icon.yt
            .social-caption Youtube
        .social
            .social-icon.fb
            .social-caption Facebook
        .social
            .social-icon.wa
            .social-caption Whatsapp
        .social
            .social-icon.sk
            .social-caption Skype
        .social
            .social-icon.x
            .social-caption X
        .social
            .social-icon.reddit
            .social-caption Reddit
        .social
            .social-icon.discord
            .social-caption Discord
        .social
            .social-icon.ig
            .social-caption Instagram
        .social
            .social-icon.vimeo
            .social-caption Vimeo
        .social
            .social-icon.mail
            .social-caption @Email

    h1 Properties in progress ({{objects.length}})
    UiGallery(:images="objects")

    h1 Realtor's Summary
    p With over a decade of experience in luxury real estate, I specialize in connecting discerning buyers with their dream properties. From sleek urban penthouses to sprawling countryside estates, every listing is handpicked for quality, location, and long-term value.
    p My approach is built on trust, transparency, and a deep understanding of market trends. I believe that finding the right home is not just about square footage — it is about finding a space that fits your lifestyle and ambitions.
    p Whether you are buying, selling, or investing, I offer tailored guidance every step of the way. Let us turn your real estate goals into reality.

    .footer-wrapper
        .footer
            p XYZ team
            p We love what we do!

    .qr-overlay(v-if="showQR" @click.self="showQR = false")
        .qr-popup
            img.qr-code(src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://example.com" alt="QR Code")
            p.qr-label example.com
            button.qr-close(@click="showQR = false") &times;
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'test'
})

const showQR = ref(false)
const linkCopied = ref(false)

function copyLink() {
  navigator.clipboard.writeText('http://example.com')
  linkCopied.value = true
  setTimeout(() => linkCopied.value = false, 1500)
}

const objects = [
  { url:"https://picsum.photos/seed/malibu/400/300", caption:"Sunset Villa, Malibu", price:12500000 },
  { url:"https://picsum.photos/seed/penthouse/400/300", caption:"Downtown Penthouse, NY", price:8900000 },
  { url:"https://picsum.photos/seed/lakefront/400/300", caption:"Lakefront Cottage, Tahoe", price:3450000 },
  { url:"https://picsum.photos/seed/loft/400/300", caption:"Modern Loft, Brooklyn", price:5600000 },
  { url:"https://picsum.photos/seed/colonial/400/300", caption:"Colonial Estate, Boston", price:7800000 },
  { url:"https://picsum.photos/seed/beach/400/300", caption:"Beach House, Miami", price:9500000 },
  { url:"https://picsum.photos/seed/mountain/400/300", caption:"Mountain Retreat, Aspen", price:11200000 },
  { url:"https://picsum.photos/seed/townhouse/400/300", caption:"Townhouse, San Francisco", price:4300000 },
  { url:"https://picsum.photos/seed/ranch/400/300", caption:"Ranch Estate, Austin", price:6700000 },
  { url:"https://picsum.photos/seed/waterfront/400/300", caption:"Waterfront Condo, Chicago", price:5100000 },
  { url:"https://picsum.photos/seed/villa/400/300", caption:"Spanish Villa, Santa Fe", price:8200000 },
  { url:"https://picsum.photos/seed/garden/400/300", caption:"Garden Flat, Portland", price:3900000 },
  { url:"https://picsum.photos/seed/brownstone/400/300", caption:"Brownstone, Harlem", price:6400000 },
  { url:"https://picsum.photos/seed/desert/400/300", caption:"Desert Modern, Palm Springs", price:4600000 },
  { url:"https://picsum.photos/seed/mediterranean/400/300", caption:"Mediterranean Villa, LA", price:13800000 },
  { url:"https://picsum.photos/seed/victorian/400/300", caption:"Victorian House, Seattle", price:7300000 }
]
</script>

<style lang="scss" scoped>
.header{
	background-image:url('/bg.jpg');
	background-position:center;
	background-size:cover;
	position:relative;
}
.header-link{
	line-height:15px;
	background-color:RGBA(255,255,255,0.5);
	background-image:url('/paperclip.png');
	background-size:16px;
	background-position:12px 7px;
	background-repeat:no-repeat;
	border-radius:5px;
	padding:8px 20px;
	margin:5px;
	padding-left:35px;
	position:absolute;
	right:5px;
	top:5px;
	font-size:15px;
	cursor:pointer;
	user-select:none;
}
.header-main-block{
	margin-top:120px;
	display:flex;
	flex-direction:row;
	justify-content:center;
}
.header-background-gradient{
	position:absolute;
	left:0;
	right:0;
	top:200px;
	background:linear-gradient(transparent,white);
	height:40px;
}
.header-background-white{
	position:absolute;
	left:0;
	right:0;
	top:240px;
	background:#fff;
	bottom:0;
}
.vcard-icon{
	background-image:url('/user.png');
	width:40px;
	height:40px;
	background-size:100%;
}
.qr-icon{
	background-image:url('/qr.png');
	width:40px;
	height:40px;
	background-size:100%;
}
.title{
	font-size:15px;
	font-weight:bold;
	margin-left:10px;
}
.subtitle{
	font-size:35px;
	margin-left:10px;
}
.name,.surname{
	font-size:35px;
	margin-right:10px;
	text-align:right;
}
.name{
	padding-top:40px;
	font-weight:bold;
}
.phones{
	padding-top:50px;
	padding-right:10px;
	font-size:20px;
	text-align:right;
}
.phone{
	padding-bottom:10px;
}
.phone-icon{
	display:inline-block;
	width:15px;
	height:15px;
	background-size:100%;
	background-image:url('/phone.png');
	margin-right:5px;
}
.phone span{
	border-bottom:3px dotted #000;
}
.social-icon{
	width:7.5vw;
	height:7.5vw;
	background:green;
	border-radius:1vw;
	display:inline-block;
	background-size:50%;
	background-position:center;
	background-repeat:no-repeat;
}
.social{
	width:10vw;
	height:10vw;
	display:inline-block;
	text-align:center;
}
.yt{background-color:#FF0000;background-image:url('/yt.png')}
.fb{background-color:#1877F2;background-image:url('/fb.png')}
.x{background-color:#000;background-image:url('/x.png')}
.reddit{background-color:#FF4500;background-image:url('/reddit.png')}
.discord{background-color:#5865F2;background-image:url('/discord.png')}
.wa{background-color:#25D366;background-image:url('/wa.png')}
.sk{background-color:#0078D7;background-image:url('/sk.png')}
.ig{background-color:#F00073;background-image:url('/ig.png')}
.vimeo{background-color:#1AB7EA;background-image:url('/vimeo.png')}
.mail{background-color:#FC6D26;background-image:url('/mail.png')}
.socials{
	margin-top:40px;
}
.footer-wrapper{
	text-align:center;
	height:270px;
	overflow:hidden;
	margin-top:200px;
}
.footer{
	width:344px;
	height:344px;
	text-align:center;
	background-color:#EB9F0B;
	border-radius:50%;
	display:inline-block;
	font-weight:bold;
	box-sizing:border-box;
	padding-top:60px;
	background-image:url('/footer.png');
	background-position:30px 150px;
	background-repeat:no-repeat;
}
.footer p{
	font-size:14px;
}
.qr-overlay{
	position:fixed;
	inset:0;
	background:rgba(0,0,0,0.5);
	display:flex;
	align-items:center;
	justify-content:center;
	z-index:9999;
}
.qr-popup{
	background:#fff;
	border-radius:16px;
	padding:30px;
	text-align:center;
	position:relative;
	box-shadow:0 8px 32px rgba(0,0,0,0.25);
}
.qr-code{
	width:200px;
	height:200px;
}
.qr-label{
	margin-top:12px;
	font-size:16px;
	color:#555;
}
.qr-close{
	position:absolute;
	top:-12px;
	right:-12px;
	width:32px;
	height:32px;
	border-radius:50%;
	background:#fff;
	border:none;
	font-size:22px;
	cursor:pointer;
	color:#666;
	line-height:1;
	box-shadow:0 2px 8px rgba(0,0,0,0.2);
}
.qr-close:hover{
	color:#333;
}
@media(max-width:735px){
	.social{
		width:20vw;
		height:20vw;
		margin-bottom:20px;
	}
	.social-icon{
		width:14vw;
		height:14vw;
		border-radius:10px;
	}
}
</style>
