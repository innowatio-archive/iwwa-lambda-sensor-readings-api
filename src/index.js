import Collection from "lk-collection";
import dotenv from "dotenv";

dotenv.load();

const Sensors = new Collection({
    name: "sensor-readings",
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

export const handler = Sensors.jsonRpcToKinesis;
