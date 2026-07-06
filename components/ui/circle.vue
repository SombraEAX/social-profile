<template lang="pug">
.circle-global(:style="{display:'flex', flexDirection:'column',height:height+'px'}")
    .circle-padding(:style="{minHeight:(height-diameter)/2-offset+'px'}")
    .circle-wrapper(:style="{position:'relative',minHeight:(+diameter)+(+offset)+'px',width:diameter+'px',minWidth:diameter+'px'}")
        .circle-layer(:style="{position:'absolute',left:0,top:0,bottom:0,top:0}")
            .circle-shadow(:style="{background:shadow, borderRadius:'50%', boxSizing:'border-box', height: diameter+'px', width: diameter+'px'}")
        .circle-layer(:style="{position:'absolute',left:0,top:0,bottom:0,top:0}")
            .circle-circle(:style="{background, border, borderRadius:'50%', boxSizing:'border-box', height: diameter+'px', width: diameter+'px',marginTop:offset+'px',display:'flex',textAlign:'center',backgroundSize:'cover',backgroundPosition:'center'}")
                .circle-inner(:style="{margin:'auto'}")
                    slot
    .circle-caption(:style="captionStyle" style="text-align:center") {{caption}}
</template>
<script>
	export default {
		props:[
			'circleStyle',
			'diameter',
			'background',
			'border',
			'shadow',
			'height',
			'offset',
			'captionStyle',
			'caption'			
		]
	}
</script>
