//  根据UI的前端规范大概自定义了antd的主题
//  antd 默认配置文件 https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less#L51
//  antd 规范 https://ant.design/docs/spec/introduce-cn
//  保存后最好跑一次build



module.exports = () => {
    const $primary = "#ffc135",
        $normal = "#e4e4e4",
        $success = "#66cc33",
        $highlight = "#ff0000",
        $link = "#3399cc",
        $error = "#e54545",
        $background = "#f2f2f2",
        $text = "#333",
        $text_help = "#666",
        $text_disable = "#999",
        $border_color = "#b3b3b3",
        $font_size = "14px",
        $broder_font_wight = 400,
        $btn_height = "40px",
        $input_height = "40px";

    return {

        // 颜色定义
        "@primary-color": $primary, //主要色[黄]
        "@success-color": $success, //成功色[绿]

        "@error-color": $error, //错误色[红]
        "@highlight-color": $highlight, //高亮提示色[红]
        "@warning-color": $error, //警告色 跟ui确认了下暂缺，以后有用上再补，先同错误色一样
        "@normal-color": $normal, //普通的灰色

        // 背景色
        "@background-color-base": $background,

        //文字色，对于antd的参数设置不太明确，可能实际还得调整
        "@heading-color": $text, //主要文字
        "@text-color": $text_help, //次要文字
        "@text-color-secondary": $text_disable, //辅助文字

        //文字大小,跟UI确认了默认12,14,16,24,32三种,其中16为默认大小
        "@font-size-base": $font_size,
        "@font-size-lg": "@font-size-base + 6px",

        // 链接颜色
        "@link-color": $link, //蓝色

        // 通用的边框颜色
        "@border-color-base": $border_color,
        "@btn-font-weight": $broder_font_wight,

        //按钮高度，跟ui确认了一次 默认统一40高度，宽度约定三个通用的 120,160,180px
        "@btn-circle-size": $btn_height,
        "@btn-circle-size-lg": $btn_height,
        "@btn-circle-size-sm": $btn_height,

        //输入框高度，跟ui确认了一次 默认统一40高度
        "@input-height-base": $input_height,
        "@input-height-lg": $input_height,
        "@input-height-sm": $input_height,

    };
};
