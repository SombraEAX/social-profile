<template lang="pug">
.global
    .header
        .header-background-gradient
        .header-background-white
        .header-link-wrapper
            .header-link rc.bot/link/1234567
        .header-main-block
            circle-icon(
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
            circle-icon(
            	diameter="200"
            	border="5px solid #fff"
            	shadow="#6B3279"
            	height="220"
            	offset="4"
            	style="margin:0px -20px;z-index:100"
            	captionStyle=""
            	caption=""     
            	background="url('./avatar.jpg')"       	
            ) 
            circle-icon(
            	diameter="75"
            	border="3px solid #fff"
            	shadow="#6B3279"
            	height="220"
            	offset="3"
            	style="z-index:200"
            	captionStyle="font-size:14px;font-weight:bold;padding-top:5px"
            	caption="QR"
            	background="#FC6F08"
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
    image-gallery(:images="objects")

    h1 Realtor's Summary
    p With over a decade of experience in luxury real estate, I specialize in connecting discerning buyers with their dream properties. From sleek urban penthouses to sprawling countryside estates, every listing is handpicked for quality, location, and long-term value.
    p My approach is built on trust, transparency, and a deep understanding of market trends. I believe that finding the right home is not just about square footage — it is about finding a space that fits your lifestyle and ambitions.
    p Whether you are buying, selling, or investing, I offer tailored guidance every step of the way. Let us turn your real estate goals into reality.

    .footer-wrapper
        .footer
            p RC team
            p We love what we do!
</template>

<script>
	import CircleIcon from '../components/ui/circle.vue'
	import ImageGallery from '../components/ui/gallery.vue'

	export default {
		head(){
			return 'test'
		},
		components:{
			CircleIcon,
			ImageGallery
		},
		async mounted(){
		},
		name: 'index',
		data(){
			return {
				objects: [
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000},
					{url:"./house.jpg",caption:"Apartment",price:12000000}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
