/* eslint-disable jsx-quotes */
import { View, Image, Text} from "@tarojs/components";
import { AtTag } from "taro-ui";
import "./Card.scss";

const Card = ({
  size,
  url,
  title,
  label = size === "small" ? undefined : "",
}) => {
  switch (size) {
    case "small":
      return (
        <View className="card-small">
          <View className="picture-small">
            <Image className="icon-small" src={url} />
          </View>
          <View className="title-small">{title}</View>
        </View>
      );

    case "middle":
      return (
        <View className="card-middle">
          <View className="picture-middle">
            <Image className="icon-middle" src={url} />
          </View>
          <View className="title-middle">{title}</View>
          <View className="text-middle">{label}</View>
        </View>
      );

    case "large":
      return (
        <View
          className="card-large"
          style={{
            width: "44%",
            height: "400rpx",
            backgroundColor: "#ffffff",
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20rpx",
            marginBottom: "30rpx",
          }}
        >
          <View className="contents-large">
            <View className="title-large">
              <Text>{title}</Text>
              <View className="tag"><AtTag size="small">30人询问</AtTag></View>
            </View>
            <View className="text-large">{label}</View>
          </View>
        </View>
      );
  }
};

export default Card;
