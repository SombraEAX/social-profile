<template lang="pug">
	.gallery
		button.gallery-button.gallery-left(
			@mousedown="startScroll('left')"
			@touchstart.prevent="startScroll('left')"
			@contextmenu="contextmenu($event)"
			v-if="leftButtonVisible"
		)
		button.gallery-button.gallery-right(
			@mousedown="startScroll('right')"
			@touchstart.prevent="startScroll('right')"
			@contextmenu="contextmenu($event)"
			v-if="rightButtonVisible"
		)
		.gallery-outer(ref="gallery")
			.gallery-inner(v-for="image in images")
				.gallery-image(
					:style="{backgroundImage:`url(\"${image.url}\")`}"
					@click="clickImage(image)"
					:class="{selected:selected ? image===selected : image===images[0]}"
				)
				.gallery-caption {{image.caption}}
				.gallery-price $ {{image.price}}
			div(style="width:20px;min-width:20px")
</template>
<style scoped lang="scss">
.gallery{
	position:relative;
}
.gallery-outer{
	overflow-x:hidden;
	display:flex;
}
.gallery-inner{
	display:inline-flex;
	flex-direction:column;
}
.gallery-image{
	width:286px;
	height:227px;
	min-width:286px;
	background-size:cover;
	background-position:center;
	background-repeat:no-repeat;
	margin-left:20px;
	border-radius:5px;
}
.gallery-image:hover{
	border-color:orange;
}
.gallery-image.selected{
	border-color:blue !important;
}
.gallery-caption{
	margin-left:20px;
	font-weight:bold;
	font-size:24px;
	margin-top:30px;
}
.gallery-price{
	margin-left:20px;
	font-weight:bold;
	font-size:20px;
	margin-top:15px;
}
.gallery-button{
	position:absolute;
	top:0px;
	bottom:0px;
	width:100px;
	height:227px;
	border:0px;
	border-radius:0px;
	background-position:center;
	background-repeat:no-repeat;
	background-size:50%;
	cursor:pointer;
	background-color:transparent;
}
.gallery-button:not(:hover){
	opacity:75%;
}
.gallery-left{
	background-image:url("/prev.png");
}
.gallery-right{
	background-image:url("/next.png");
	right:0px;
}
@media (max-width: 800px) {
	.gallery-button{
		height:106px;
	}
	.gallery-image{
		width:136px;
		height:106px;
		min-width:100px;
		margin-left:10px;
	}
	.gallery-caption{
		font-size:14px;
		margin-top:12px;
		margin-left:10px;
	}
	.gallery-price{
		font-size:14px;
		margin-top:4px;
		margin-left:10px;
	}
}
</style>
<script>
	export default {
		props: ['images'],
		data(){
			return {
				leftButtonVisible:false,
				rightButtonVisible:false,
				scrolling:null,
				selected:null
			}	
		},
		mounted(){
			let resizeHandler = () => this.resize()
			setTimeout(resizeHandler, 500)
			window.addEventListener('resize', resizeHandler)
			this._resizeHandler = resizeHandler
			this.$refs.gallery.addEventListener('scroll', resizeHandler, { passive: true })
			this._stopScroll = () => { this.stopScroll() }
			window.addEventListener('mouseup', this._stopScroll)
			window.addEventListener('touchend', this._stopScroll)
		},
		beforeUnmount(){
			this.stopScroll()
			window.removeEventListener('resize', this._resizeHandler)
			window.removeEventListener('mouseup', this._stopScroll)
			window.removeEventListener('touchend', this._stopScroll)
		},
		methods:{
			resize(){
				let gallery = this.$refs.gallery
				this.leftButtonVisible  = gallery.scrollLeft > 0
				this.rightButtonVisible = gallery.scrollLeft < gallery.scrollWidth - gallery.clientWidth - 1
			},
			startScroll(dir){
				this.scrolling = dir
				this.step()
			},
			step(){
				if(!this.scrolling) return
				let gallery = this.$refs.gallery
				let dir = this.scrolling === 'left' ? -1 : 1
				let maxScroll = gallery.scrollWidth - gallery.clientWidth

				if((dir < 0 && gallery.scrollLeft <= 0) || (dir > 0 && gallery.scrollLeft >= maxScroll))
					return this.stopScroll()

				gallery.scrollBy({ left: dir * 30 })
				this.frame = requestAnimationFrame(() => this.step())
			},
			stopScroll(){
				if(this.frame) cancelAnimationFrame(this.frame)
				this.frame = null
				this.scrolling = null
			},
			contextmenu(event){
				event.preventDefault()
     			event.stopPropagation()
				return false
			},
			clickImage(image){
				this.$emit('change',image)
				this.selected = image
			}
		}
	}
</script>
