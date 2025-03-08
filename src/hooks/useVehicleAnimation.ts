import * as THREE from "three";
import { useFrame } from '@react-three/fiber'
import { tileSize, maxTileIndex, minTileIndex } from "../constants";


export default function useVehicleAnimation(
    ref: React.RefObject<THREE.Group | null>,
    direction: boolean,
    speed: number
) {
    useFrame((state, delta) => {
        if(!ref.current) return;
        const vehicle = ref.current;
        const deltatime = delta * 125;

        const beginningOfRow = (minTileIndex - 2) * tileSize;
        const endOfRow = (maxTileIndex + 2) * tileSize;

        if (direction) {
            vehicle.position.x = 
                vehicle.position.x > endOfRow 
                ? beginningOfRow 
                : vehicle.position.x + speed * deltatime;
        } else {
            vehicle.position.x = 
                vehicle.position.x < beginningOfRow
                ? endOfRow : vehicle.position.x - speed * deltatime;
        }
    });
}