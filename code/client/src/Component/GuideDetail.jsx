import { HeartFilled, HeartOutlined, SaveFilled, SaveOutlined } from "@ant-design/icons";
import { Button, Carousel, Modal, Tag, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

const { Text, Paragraph } = Typography;

function GuideDetail(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        // TODO: call the api to like
    };

    const handleSave = () => {
        setIsSaved(!isSaved);
        // TODO: call the api to save
    };

    return (
        <Modal
            title={<Title level={2} className="text-center">{props.guide?.title}</Title>}
            open={props.visible}
            onCancel={props.onClose}
            footer={null}
            centered
        >
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <Text strong>Author:</Text> <Text>{props.guide?.author || "Unknown Author"}</Text>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                {props.guide?.tags && props.guide.tags.map((tag, index) => (
                    <Tag color="blue" key={index} style={{ margin: '4px' }}>
                        {tag}
                    </Tag>
                ))}
            </div>

            {props.guide?.images && props.guide.images.length > 0 && (
                <div style={{textAlign: 'center', alignItems: 'center'}}>
                    <Title level={4}>Images</Title>
                    <Carousel arrows autoplay>
                        {props.guide.images.map((image, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', }}>
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
                <Button
                    type="primary"
                    icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
                    onClick={handleLike}
                    style={{ backgroundColor: isLiked ? '#ff4d4f' : '#1890ff', borderColor: isLiked ? '#ff4d4f' : '#1890ff' }}
                >
                    {isLiked ? "Liked" : "Like"}
                </Button>
                <Button
                    type="default"
                    icon={isSaved ? <SaveFilled /> : <SaveOutlined />}
                    onClick={handleSave}
                    style={{ backgroundColor: isSaved ? '#52c41a' : 'white', borderColor: isSaved ? '#52c41a' : '#d9d9d9' }}
                >
                    {isSaved ? "Saved" : "Save"}
                </Button>
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <Title level={4}>Description</Title>
                <Paragraph>
                    {props.guide?.description || "No description available."}
                </Paragraph>
            </div>
        </Modal>
    )
}

export default GuideDetail;