/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
// ////////////////////22FI004 阿部 明日樹以下は最終課題 ///////////////////////////////////


class ThreeJSContainer {
    scene;
    light;
    snow;
    constructor() { }
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x495ed));
        renderer.shadowMap.enabled = true;
        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0));
        const orbitControls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        const render = (time) => {
            orbitControls.update();
            this.updateScene();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x495ed);
        // 地面の作成
        const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(25, 25);
        const planeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x99ff99 });
        const planeMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(planeGeometry, planeMaterial);
        planeMesh.rotation.x = -Math.PI / 2;
        planeMesh.receiveShadow = true;
        this.scene.add(planeMesh);
        // 雪だるまの作成
        const colors = [0xff0000, 0x0000ff, 0xffff00, 0x00ff00, 0x800080, 0xffc0cb, 0xffa500, 0xffffff, 0x000000];
        const radius = 5;
        const angleStep = (2 * Math.PI) / 9;
        for (let i = 0; i < 9; i++) {
            const snowman = this.createSnowman(colors[i]);
            const angle = i * angleStep;
            snowman.position.set(radius * Math.cos(angle), 0, radius * Math.sin(angle));
            this.scene.add(snowman);
        }
        // ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff);
        const lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        // 雪のエフェクト
        const snowGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();
        const snowCount = 1000;
        const snowVertices = [];
        for (let i = 0; i < snowCount; i++) {
            const x = Math.random() * 50 - 25;
            const y = Math.random() * 50;
            const z = Math.random() * 50 - 25;
            snowVertices.push(x, y, z);
        }
        snowGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(snowVertices, 3));
        const snowMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ color: 0xffffff, size: 0.1 });
        this.snow = new three__WEBPACK_IMPORTED_MODULE_1__.Points(snowGeometry, snowMaterial);
        this.scene.add(this.snow);
    };
    createSnowman = (color) => {
        // 下の球
        const bottomGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.6, 32, 32);
        const bottomMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffffff });
        const bottom = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bottomGeometry, bottomMaterial);
        bottom.position.set(0, 0.6, 0);
        // 中央の球
        const middleGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.4, 32, 32);
        const middleMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffffff });
        const middle = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(middleGeometry, middleMaterial);
        middle.position.set(0, 1.4, 0);
        // 頭の球
        const headGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.3, 32, 32);
        const headMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffffff });
        const head = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(headGeometry, headMaterial);
        head.position.set(0, 2.1, 0);
        // 目
        const eyeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.05, 32, 32);
        const eyeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x000000 });
        const leftEye = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.1, 2.2, 0.25);
        const rightEye = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.1, 2.2, 0.25);
        // 鼻
        const noseGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ConeGeometry(0.05, 0.2, 32);
        const noseMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffa500 });
        const nose = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(noseGeometry, noseMaterial);
        nose.rotation.x = Math.PI / 2;
        nose.position.set(0, 2.1, 0.35);
        // 帽子（バケツ）
        const hatGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.2, 0.3, 0.4, 32);
        const hatMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: color });
        const hat = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(hatGeometry, hatMaterial);
        hat.position.set(0, 2.5, 0);
        // 雪だるまのグループ化
        const snowman = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        snowman.add(bottom);
        snowman.add(middle);
        snowman.add(head);
        snowman.add(leftEye);
        snowman.add(rightEye);
        snowman.add(nose);
        snowman.add(hat);
        return snowman;
    };
    updateScene = () => {
        // 円形に平行移動
        this.scene.children.forEach((child) => {
            if (child instanceof three__WEBPACK_IMPORTED_MODULE_1__.Group) {
                const angle = Math.atan2(child.position.z, child.position.x);
                const newAngle = angle + 0.01;
                const radius = Math.sqrt(child.position.x * child.position.x + child.position.z * child.position.z);
                child.position.set(radius * Math.cos(newAngle), 0, radius * Math.sin(newAngle));
            }
        });
        // 雪のエフェクトを更新
        this.snow.position.y -= 0.1;
        if (this.snow.position.y < -25) {
            this.snow.position.y = 25;
        }
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(2, 2, 3));
    document.body.appendChild(viewport);
}
// // ////////////////////22FI004 阿部 明日樹以下は第13回 13-1 ///////////////////////////////////
// import * as CANNON from 'cannon-es';
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// class ThreeJSContainer {
//     private scene: THREE.Scene;
//     private light: THREE.Light;
//     constructor() {
//     }
//      // 画面部分の作成(表示する枠ごとに)*
//     public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(width, height);
//         renderer.setClearColor(new THREE.Color(0x495ed));
//          renderer.shadowMap.enabled = true; //シャドウマップを有効にする
//          //カメラの設定
//         const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//         camera.position.copy(cameraPos);
//         camera.lookAt(new THREE.Vector3(0, 0, 0));
//         const orbitControls = new OrbitControls(camera, renderer.domElement);
//         this.createScene();
//          // 毎フレームのupdateを呼んで，render
//          // reqestAnimationFrame により次フレームを呼ぶ
//         const render: FrameRequestCallback = (time) => {
//             orbitControls.update();
//             renderer.render(this.scene, camera);
//             requestAnimationFrame(render);
//         }
//         requestAnimationFrame(render);
//         renderer.domElement.style.cssFloat = "left";
//         renderer.domElement.style.margin = "10px";
//         return renderer.domElement;
//     }
//      // シーンの作成(全体で1回)
//     private createScene = () => {
//         this.scene = new THREE.Scene();
//          // グリッド表示
//         const gridHelper = new THREE.GridHelper( 10,);
//         this.scene.add( gridHelper );  
//          // 軸表示
//         const axesHelper = new THREE.AxesHelper( 5 );
//         this.scene.add( axesHelper );
//          //ライトの設定
//         this.light = new THREE.DirectionalLight(0xffffff);
//         const lvec = new THREE.Vector3(1, 1, 1).normalize();
//         this.light.position.set(lvec.x, lvec.y, lvec.z);
//         this.scene.add(this.light);
//         const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0)});
//         world.defaultContactMaterial.friction = 0.01;
//         world.defaultContactMaterial.restitution = 4;
//          //boxの追加
//          // const geometry = new THREE.BoxGeometry(1, 1, 1);
//         // const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
//         // const cube = new THREE.Mesh(geometry, material);
//         // cube.position.y = 3;
//         // this.scene.add(cube);
//         // const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
//         // const cubeBody = new CANNON.Body({ mass: 1 });
//         // cubeBody.addShape(cubeShape);
//         // cubeBody.position.set(cube.position.x, cube.position.y, cube.position.z);
//         // cubeBody.quaternion.set(cube.quaternion.x, cube.quaternion.y, cube.quaternion.z, cube.quaternion.w);
//         // world.addBody(cubeBody);
// // ドミノを作成
// const dominos = [];
// const dominoBodies = [];
// const dominoGeometry = new THREE.BoxGeometry(0.25, 0.5 ,0.1); // 幅0.2、高さ2、奥行き1の立方体
// const dominoMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
// const radius = 1.0; // ドミノを配置する円の半径
// const numDominos = 20; // ドミノの数
// for (let i = 0; i < numDominos; i++) {
//     const domino = new THREE.Mesh(dominoGeometry, dominoMaterial);
//     const angle = (i / numDominos) * 2 * Math.PI;
//     const x = radius * Math.cos(angle);
//     const z = radius * Math.sin(angle);
//     //domino.position.set(i * 1.25, 1, 0); // 各ドミノを隣り合うように配置
//     domino.position.set(x, 1, z);
//     domino.rotation.y = -angle;
//     this.scene.add(domino);
//     dominos.push(domino);
//     const dominoShape = new CANNON.Box(new CANNON.Vec3(0.125, 0.25, 0.05)); // 幅0.1、高さ1、奥行き0.5の形状
//         const dominoBody = new CANNON.Body({ mass: 1});
//         // 最初のドミノを少し倒れかけるように設定
// dominos[0].rotateX(  Math.PI / 6); // Three.jsのドミノを30度傾ける
//     dominoBody.addShape(dominoShape);
//     dominoBody.position.set(domino.position.x, domino.position.y, domino.position.z);
//     dominoBody.quaternion.set(domino.quaternion.x, domino.quaternion.y, domino.quaternion.z, domino.quaternion.w);
//     world.addBody(dominoBody);
//     dominoBodies.push(dominoBody);
// }
// world.defaultContactMaterial.friction = 0.1;
// world.defaultContactMaterial.restitution = 0;
//         //地面の追加
//         const phongMaterial = new THREE.MeshPhongMaterial();
//         const planeGeometry = new THREE.PlaneGeometry(25, 25);
//         const planeMesh = new THREE.Mesh(planeGeometry, phongMaterial);
//         planeMesh.material.side = THREE.DoubleSide; // 両面
//         planeMesh.rotateX(-Math.PI / 2);
//         this.scene.add(planeMesh);
//         const planeShape = new CANNON.Plane()
//         const planeBody = new CANNON.Body({ mass: 0 })
//         planeBody.addShape(planeShape)
//         planeBody.position.set(planeMesh.position.x, planeMesh.position.y, planeMesh.position.z);
//         planeBody.quaternion.set(planeMesh.quaternion.x, planeMesh.quaternion.y, planeMesh.quaternion.z, planeMesh.quaternion.w);
//         world.addBody(planeBody)
//         let update: FrameRequestCallback = (time) => {
//             //world.fixedStep();
//             world.step(1 / 60, 20); // ステップ時間を1/60秒、実行時間を1/120秒に設定して倍速化
//             // box
//             // cube.position.set(cubeBody.position.x, cubeBody.position.y, cubeBody.position.z);
//             // cube.quaternion.set(cubeBody.quaternion.x, cubeBody.quaternion.y, cubeBody.quaternion.z, cubeBody.quaternion.w);
//             //domino
//             for (let i = 0; i < dominos.length; i++) {
//                 dominos[i].position.set(dominoBodies[i].position.x, dominoBodies[i].position.y, dominoBodies[i].position.z);
//                 dominos[i].quaternion.set(dominoBodies[i].quaternion.x, dominoBodies[i].quaternion.y, dominoBodies[i].quaternion.z, dominoBodies[i].quaternion.w);
//             }
//             requestAnimationFrame(update);
//         }
//         requestAnimationFrame(update);
//     }
// }
// window.addEventListener("DOMContentLoaded", init);
// function init() {
//     let container = new ThreeJSContainer();
//     let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(5, 5, 5));
//     document.body.appendChild(viewport);
// }
// // // // ////////////////////22FI004 阿部 明日樹以下は第11回  11-2///////////////////////////////////
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// class ThreeJSContainer {
//     private scene: THREE.Scene;
//     private light: THREE.Light;
//     constructor() {
//     }
//     // 画面部分の作成(表示する枠ごとに)*
//     public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(width, height);
//         renderer.setClearColor(new THREE.Color(0x495ed));
//         renderer.shadowMap.enabled = true; //シャドウマップを有効にする
//         //カメラの設定
//         const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//         camera.position.copy(cameraPos);
//         camera.lookAt(new THREE.Vector3(0, 0, 0));
//         const orbitControls = new OrbitControls(camera, renderer.domElement);
//         this.createScene();
//         // 毎フレームのupdateを呼んで，render
//         // reqestAnimationFrame により次フレームを呼ぶ
//         const render: FrameRequestCallback = (time) => {
//             orbitControls.update();
//             renderer.render(this.scene, camera);
//             requestAnimationFrame(render);
//         }
//         requestAnimationFrame(render);
//         renderer.domElement.style.cssFloat = "left";
//         renderer.domElement.style.margin = "10px";
//         return renderer.domElement;
//     }
//     // シーンの作成(全体で1回)
//     private createScene = () => {
//         this.scene = new THREE.Scene();
//         // メッシュの生成
//         const geometry = new THREE.ConeGeometry(0.25, 1);
//         const redMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
//         const greenMaterial = new THREE.MeshPhongMaterial({ color: 0x00FF00 });
//         const blueMaterial =  new THREE.MeshPhongMaterial({ color: 0x0000FF });
//         const redCone = new THREE.Mesh(geometry, redMaterial);
//         const greenCone = new THREE.Mesh(geometry, greenMaterial);
//         const blueCone = new THREE.Mesh(geometry, blueMaterial);
//         //モデルの座標移動
//         redCone.translateX(0.5);
//         redCone.rotateZ(-Math.PI / 2);
//         greenCone.translateY(0.5);
//         blueCone.translateZ(0.5);
//         blueCone.rotateX(Math.PI / 2);
//         //グループにして一つのオブジェクトとして扱う
//         const obj : THREE.Group = new THREE.Group();
//         obj.add(redCone);
//         obj.add(greenCone);
//         obj.add(blueCone);
//         this.scene.add(obj);
//         // グリッド表示
//         const gridHelper = new THREE.GridHelper( 10,);
//         this.scene.add( gridHelper );  
//         // 軸表示
//         const axesHelper = new THREE.AxesHelper( 5 );
//         this.scene.add( axesHelper );
//         // 線形補間の関数
//         let lerp = (p0: THREE.Vector3, p1: THREE.Vector3, t: number) : (THREE.Vector3) => {
//             const result = new THREE.Vector3((1.0 - t) * p0.x + t * p1.x,
//                                                 (1.0 - t) * p0.y + t * p1.y,
//                                                 (1.0 - t) * p0.z + t * p1.z);
//             //const result = p0.multiplyScalar((1.0 - t)).add(p1.multiplyScalar((t)));
//             return result;
//         }
//         let bezier = (p0: THREE.Vector3, p1: THREE.Vector3, 
//             p2: THREE.Vector3, p3: THREE.Vector3, t: number) : (THREE.Vector3) => {
//         const result = new THREE.Vector3((1.0 - t) * (1.0 - t) * (1.0 - t) * p0.x + 3 * t * (1.0 - t) * (1.0 - t) * p1.x + 3 * t * t * (1.0 - t) * p2.x + t * t * t * p3.x,
//         (1.0 - t) * (1.0 - t) * (1.0 - t) * p0.y + 3 * t * (1.0 - t) * (1.0 - t) * p1.y + 3 * t * t * (1.0 - t) * p2.y + t * t * t * p3.y,
//         (1.0 - t) * (1.0 - t) * (1.0 - t) * p0.z + 3 * t * (1.0 - t) * (1.0 - t) * p1.z + 3 * t * t * (1.0 - t) * p2.z + t * t * t * p3.z);//Bezier曲線を実装する
//         return result;
//         }
// let hermite = (p0: THREE.Vector3, v0: THREE.Vector3, 
//     p1: THREE.Vector3, v1: THREE.Vector3, t: number) : (THREE.Vector3) => {
//     const result = new THREE.Vector3((2.0 * t + 1.0) * (1.0 - t) * (1.0 - t) * p0.x + t * (1.0 - t) * (1.0 - t) * v0.x + t * t * (3.0 - 2 * t) * p1.x - t * t * (1.0 - t) * v1.x,
//     (2.0 * t + 1.0) * (1.0 - t) * (1.0 - t) * p0.y + t * (1.0 - t) * (1.0 - t) * v0.y + t * t * (3.0 - 2 * t) * p1.y - t * t * (1.0 - t) * v1.y,
//     (2.0 * t + 1.0) * (1.0 - t) * (1.0 - t) * p0.z + t * (1.0 - t) * (1.0 - t) * v0.z + t * t * (3.0 - 2 * t) * p1.z - t * t * (1.0 - t) * v1.z);//エルミート曲線を実装する
//     return result;   
//     }
//         //ライトの設定
//         this.light = new THREE.DirectionalLight(0xffffff);
//         const lvec = new THREE.Vector3(1, 1, 1).normalize();
//         this.light.position.set(lvec.x, lvec.y, lvec.z);
//         this.scene.add(this.light);
//         const clock = new THREE.Clock();
//         let t = 0;
//         let seg = 0;
//         let points : THREE.Vector3[] = []
//         // points.push(new THREE.Vector3(-4, 0, 0));   複数のbuzier
//         // points.push(new THREE.Vector3(-3, 0, 3));
//         // points.push(new THREE.Vector3(-1, 0, 3));
//         // points.push(new THREE.Vector3(0, 0, 0));
//         // points.push(new THREE.Vector3(0, 0, 0));
//         // points.push(new THREE.Vector3(-4, 0, -2));
//         // points.push(new THREE.Vector3(4, 0, -4));
//         // points.push(new THREE.Vector3(4, 0, -2));
//         // points.push(new THREE.Vector3(0, 0, 2));
//         // points.push(new THREE.Vector3(0, 0, 8));
//         // points.push(new THREE.Vector3(2, 0, 2));
//         // points.push(new THREE.Vector3(0, 0, -8));
//         points.push(new THREE.Vector3(0, 0, -4));
//         points.push(new THREE.Vector3(0, 0, 0));
//         points.push(new THREE.Vector3(0, 0, 2));
//         points.push(new THREE.Vector3(0, 0, 8));
//         points.push(new THREE.Vector3(0, 0, 2));
//         points.push(new THREE.Vector3(0, 0, 8));
//         points.push(new THREE.Vector3(2, 0, 2));
//         points.push(new THREE.Vector3(0, 0, -8));
//         points.push(new THREE.Vector3(2, 0, 2));
//         points.push(new THREE.Vector3(0, 0, -8));
//         points.push(new THREE.Vector3(0, 2, 0));
//         points.push(new THREE.Vector3(-4, 0, 0));
//         points.push(new THREE.Vector3(0, 2, 0));
//         points.push(new THREE.Vector3(-4, 0, 0));
//         points.push(new THREE.Vector3(-4, 2, 0));
//         points.push(new THREE.Vector3(0, 4, 0));
//         let update: FrameRequestCallback = (time) => {
//             t += clock.getDelta();
//             if(t > 1.0) {
//                 t -= 1.0;
//                 seg = (seg + 1) % 4;
//             }
//             //const pos = lerp(points[0], points[1], t);
//             //const pos = bezier(points[0], points[1],points[2],points[3], t);
//             //const pos = bezier(points[seg * 4 + 0], points[seg * 4 + 1], points[seg * 4 + 2], points[seg * 4 + 3], t);
//            // const pos = hermite(points[0], points[1], points[2], points[3], t);
//              const pos = hermite(points[seg * 4 + 0], points[seg * 4 + 1], points[seg * 4 + 2], points[seg * 4 + 3], t);
//              obj.lookAt(pos);
//             obj.position.copy(pos);
//             requestAnimationFrame(update);
//         }
//         requestAnimationFrame(update);
//     }
// }
// window.addEventListener("DOMContentLoaded", init);
// function init() {
//     let container = new ThreeJSContainer();
//     let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(5, 7, 5));
//     document.body.appendChild(viewport);
// }
// // // ////////////////////22FI004 阿部 明日樹以下は第11回  11-1///////////////////////////////////
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// class ThreeJSContainer {
//     private scene: THREE.Scene;
//     private light: THREE.Light;
//     constructor() {
//     }
//     // 画面部分の作成(表示する枠ごとに)*
//     public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(width, height);
//         renderer.setClearColor(new THREE.Color(0x495ed));
//         renderer.shadowMap.enabled = true; //シャドウマップを有効にする
//         //カメラの設定
//         const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//         camera.position.copy(cameraPos);
//         camera.lookAt(new THREE.Vector3(0, 0, 0));
//         const orbitControls = new OrbitControls(camera, renderer.domElement);
//         this.createScene();
//         // 毎フレームのupdateを呼んで，render
//         // reqestAnimationFrame により次フレームを呼ぶ
//         const render: FrameRequestCallback = (time) => {
//             orbitControls.update();
//             renderer.render(this.scene, camera);
//             requestAnimationFrame(render);
//         }
//         requestAnimationFrame(render);
//         renderer.domElement.style.cssFloat = "left";
//         renderer.domElement.style.margin = "10px";
//         return renderer.domElement;
//     }
//     // シーンの作成(全体で1回)
//     private createScene = () => {
//         this.scene = new THREE.Scene();
//         // メッシュの生成
//         const geometry = new THREE.ConeGeometry(0.25, 1);
//         const redMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
//         const greenMaterial = new THREE.MeshPhongMaterial({ color: 0x00FF00 });
//         const blueMaterial =  new THREE.MeshPhongMaterial({ color: 0x0000FF });
//         const redCone = new THREE.Mesh(geometry, redMaterial);
//         const greenCone = new THREE.Mesh(geometry, greenMaterial);
//         const blueCone = new THREE.Mesh(geometry, blueMaterial);
//         //モデルの座標移動
//         redCone.translateX(0.5);
//         redCone.rotateZ(-Math.PI / 2);
//         greenCone.translateY(0.5);
//         blueCone.translateZ(0.5);
//         blueCone.rotateX(Math.PI / 2);
//         //グループにして一つのオブジェクトとして扱う
//         const obj : THREE.Group = new THREE.Group();
//         obj.add(redCone);
//         obj.add(greenCone);
//         obj.add(blueCone);
//         this.scene.add(obj);
//         // グリッド表示
//         const gridHelper = new THREE.GridHelper( 10,);
//         this.scene.add( gridHelper );  
//         // 軸表示
//         const axesHelper = new THREE.AxesHelper( 5 );
//         this.scene.add( axesHelper );
//         // 線形補間の関数
//         let lerp = (p0: THREE.Vector3, p1: THREE.Vector3, t: number) : (THREE.Vector3) => {
//             const result = new THREE.Vector3((1.0 - t) * p0.x + t * p1.x,
//                                                 (1.0 - t) * p0.y + t * p1.y,
//                                                 (1.0 - t) * p0.z + t * p1.z);
//             //const result = p0.multiplyScalar((1.0 - t)).add(p1.multiplyScalar((t)));
//             return result;
//         }
//         let bezier = (p0: THREE.Vector3, p1: THREE.Vector3, 
//             p2: THREE.Vector3, p3: THREE.Vector3, t: number) : (THREE.Vector3) => {
//         const result = new THREE.Vector3((1.0 - t) * (1.0 - t) * (1.0 - t) * p0.x + 3 * t * (1.0 - t) * (1.0 - t) * p1.x + 3 * t * t * (1.0 - t) * p2.x + t * t * t * p3.x,
//         (1.0 - t) * (1.0 - t) * (1.0 - t) * p0.y + 3 * t * (1.0 - t) * (1.0 - t) * p1.y + 3 * t * t * (1.0 - t) * p2.y + t * t * t * p3.y,
//         (1.0 - t) * (1.0 - t) * (1.0 - t) * p0.z + 3 * t * (1.0 - t) * (1.0 - t) * p1.z + 3 * t * t * (1.0 - t) * p2.z + t * t * t * p3.z);//Bezier曲線を実装する
//         return result;
//         }
// let hermite = (p0: THREE.Vector3, v0: THREE.Vector3, 
//     p1: THREE.Vector3, v1: THREE.Vector3, t: number) : (THREE.Vector3) => {
//     const result = new THREE.Vector3((2.0 * t + 1.0) * (1.0 - t) * (1.0 - t) * p0.x + t * (1.0 - t) * (1.0 - t) * v0.x + t * t * (3.0 - 2 * t) * p1.x - t * t * (1.0 - t) * v1.x,
//     (2.0 * t + 1.0) * (1.0 - t) * (1.0 - t) * p0.y + t * (1.0 - t) * (1.0 - t) * v0.y + t * t * (3.0 - 2 * t) * p1.y - t * t * (1.0 - t) * v1.y,
//     (2.0 * t + 1.0) * (1.0 - t) * (1.0 - t) * p0.z + t * (1.0 - t) * (1.0 - t) * v0.z + t * t * (3.0 - 2 * t) * p1.z - t * t * (1.0 - t) * v1.z);//エルミート曲線を実装する
//     return result;   
//     }
//         //ライトの設定
//         this.light = new THREE.DirectionalLight(0xffffff);
//         const lvec = new THREE.Vector3(1, 1, 1).normalize();
//         this.light.position.set(lvec.x, lvec.y, lvec.z);
//         this.scene.add(this.light);
//         const clock = new THREE.Clock();
//         let t = 0;
//         let seg = 0;
//         let points : THREE.Vector3[] = []
//         // points.push(new THREE.Vector3(-4, 0, 0));   複数のbuzier
//         // points.push(new THREE.Vector3(-3, 0, 3));
//         // points.push(new THREE.Vector3(-1, 0, 3));
//         // points.push(new THREE.Vector3(0, 0, 0));
//         // points.push(new THREE.Vector3(0, 0, 0));
//         // points.push(new THREE.Vector3(-4, 0, -2));
//         // points.push(new THREE.Vector3(4, 0, -4));
//         // points.push(new THREE.Vector3(4, 0, -2));
//         //points.push(new THREE.Vector3(0, 0, -8));
//            points.push(new THREE.Vector3(0, 0, -4));
// points.push(new THREE.Vector3(0, 0, 0));
// points.push(new THREE.Vector3(0, 0, 2));
// points.push(new THREE.Vector3(0, 0, 8));
// points.push(new THREE.Vector3(0, 0, 2));
// points.push(new THREE.Vector3(0, 0, 8));
// points.push(new THREE.Vector3(2, 0, 2));
// points.push(new THREE.Vector3(0, 0, -8));
// points.push(new THREE.Vector3(2, 0, 2));
// points.push(new THREE.Vector3(0, 0, -8));
// points.push(new THREE.Vector3(0, 2, 0));
// points.push(new THREE.Vector3(-4, 0, 0));
// points.push(new THREE.Vector3(0, 2, 0));
// points.push(new THREE.Vector3(-4, 0, 0));
// points.push(new THREE.Vector3(-4, 2, 0));
// points.push(new THREE.Vector3(0, 4, 0));
//         let update: FrameRequestCallback = (time) => {
//             t += clock.getDelta();
//             if(t > 1.0) {
//                 t -= 1.0;
//                 seg = (seg + 1) % 4;
//             }
//             //const pos = lerp(points[0], points[1], t);
//             //const pos = bezier(points[0], points[1],points[2],points[3], t);
//             //const pos = bezier(points[seg * 4 + 0], points[seg * 4 + 1], points[seg * 4 + 2], points[seg * 4 + 3], t);
//             //const pos = hermite(points[0], points[1], points[2], points[3], t);
//             const pos = hermite(points[seg * 4 + 0], points[seg * 4 + 1], points[seg * 4 + 2], points[seg * 4 + 3], t);
//             obj.position.copy(pos);
//             requestAnimationFrame(update);
//         }
//         requestAnimationFrame(update);
//     }
// }
// window.addEventListener("DOMContentLoaded", init);
// function init() {
//     let container = new ThreeJSContainer();
//     let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(5, 7, 5));
//     document.body.appendChild(viewport);
// }
// // ////////////////////22FI004 阿部 明日樹以下は第9回   9-2///////////////////////////////////
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// class ThreeJSContainer {
//     private scene: THREE.Scene;
//     private light: THREE.Light;
//     constructor() {
//     }
//     // 画面部分の作成(表示する枠ごとに)*
//     public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(width, height);
//         renderer.setClearColor(new THREE.Color(0x495ed));
//         renderer.shadowMap.enabled = true; //シャドウマップを有効にする
//         //カメラの設定
//         const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//         camera.position.copy(cameraPos);
//         camera.lookAt(new THREE.Vector3(0, 0, 0));
//         const orbitControls = new OrbitControls(camera, renderer.domElement);
//         this.createScene();
//         // 毎フレームのupdateを呼んで，render
//         // reqestAnimationFrame により次フレームを呼ぶ
//         const render: FrameRequestCallback = (time) => {
//             orbitControls.update();
//             renderer.render(this.scene, camera);
//             requestAnimationFrame(render);
//         }
//         requestAnimationFrame(render);
//         renderer.domElement.style.cssFloat = "left";
//         renderer.domElement.style.margin = "10px";
//         return renderer.domElement;
//     }
//     // シーンの作成(全体で1回)
//     private createScene = () => {
//         this.scene = new THREE.Scene();
// let addSceneFromObjFile = async (filePath: string) => {  
//     const meshStr = await readFile(filePath);
//     let vertices :number[] = [];
//     let vertexIndices :number[] = [];
//     let materialName: string = "";
//     const meshLines = meshStr.split("\n");
//     for(let i = 0; i < meshLines.length; ++i) {
//         const meshLine = meshLines[i];
//         const meshSpaceSplitArray = meshLine.split(" ");
//         const meshType = meshSpaceSplitArray[0]; //どの情報を表すか
//         if(meshType == "v") { //頂点
//             vertices.push(parseFloat(meshSpaceSplitArray[1])); //x座標
//             vertices.push(parseFloat(meshSpaceSplitArray[2])); //y座標
//             vertices.push(parseFloat(meshSpaceSplitArray[3])); //z座標
//         } else if (meshType == "f") { //面の情報
//             const f1 = meshSpaceSplitArray[1].split("/");
//             const f2 = meshSpaceSplitArray[2].split("/");
//             const f3 = meshSpaceSplitArray[3].split("/");
//             vertexIndices.push(parseInt(f1[0]) - 1); //頂点インデックス
//             vertexIndices.push(parseInt(f2[0]) - 1); //頂点インデックス
//             vertexIndices.push(parseInt(f3[0]) - 1); //頂点インデックス
//         } else if (meshType == "mtllib") {
//             materialName = meshSpaceSplitArray[1]; // Material file name
//         }
//     }
//     const geometry = new THREE.BufferGeometry();
//     geometry.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(vertices), 3 ) );
//     geometry.setIndex(vertexIndices);
//     geometry.computeVertexNormals();
//     let material = new THREE.MeshBasicMaterial();
//     if (materialName) {
//         const materialStr = await readFile(materialName);
//         const materialLines = materialStr.split("\n");
//         for(let i = 0; i < materialLines.length; ++i) {
//             const materialLine = materialLines[i];
//             const materialSpaceSplitArray = materialLine.split(" ");
//             const materialType = materialSpaceSplitArray[0]; //どの情報を表すか
//             if(materialType == "Kd") { // Diffuse color
//                 const color = new THREE.Color(
//                     parseFloat(materialSpaceSplitArray[1]), 
//                     parseFloat(materialSpaceSplitArray[2]), 
//                     parseFloat(materialSpaceSplitArray[3])
//                 );
//                 material = new THREE.MeshBasicMaterial({ color: color });
//             }
//         }
//     }
//     const mesh = new THREE.Mesh( geometry, material );
//     this.scene.add(mesh);
// }
// // Use the updated function
// addSceneFromObjFile("tri_mat.obj");
//         //ライトの設定
//         this.light = new THREE.DirectionalLight(0xffffff);
//         const lvec = new THREE.Vector3(1, 1, 1).normalize();
//         this.light.position.set(lvec.x, lvec.y, lvec.z);
//         this.scene.add(this.light);
//         // 毎フレームのupdateを呼んで，更新
//         // reqestAnimationFrame により次フレームを呼ぶ
//         let update: FrameRequestCallback = (time) => {
//             requestAnimationFrame(update);
//         }
//         requestAnimationFrame(update);
//     }
// }
// async function readFile(path): Promise<string> {
//     return new Promise((resolve => {
//         const loader = new THREE.FileLoader();
//         loader.load(path, (data) => {
//                 if(typeof data === "string") {
//                     resolve(data);
//                 } else {
//                     const decoder = new TextDecoder('utf-8');
//                     const decodedString = decoder.decode(data);
//                     resolve(decodedString);
//                 }
//             },
//         );
//     }));
// }
// window.addEventListener("DOMContentLoaded", init);
// function init() {
//     let container = new ThreeJSContainer();
//     let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(0, 0, 3));
//     document.body.appendChild(viewport);
// }
// // ////////////////////22FI004 阿部 明日樹以下は第9回   9-1///////////////////////////////////
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// class ThreeJSContainer {
//     private scene: THREE.Scene;
//     private light: THREE.Light;
//     constructor() {
//     }
//     // 画面部分の作成(表示する枠ごとに)*
//     public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(width, height);
//         renderer.setClearColor(new THREE.Color(0x495ed));
//         renderer.shadowMap.enabled = true; //シャドウマップを有効にする
//         //カメラの設定
//         const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//         camera.position.copy(cameraPos);
//         camera.lookAt(new THREE.Vector3(0, 0, 0));
//         const orbitControls = new OrbitControls(camera, renderer.domElement);
//         this.createScene();
//         // 毎フレームのupdateを呼んで，render
//         // reqestAnimationFrame により次フレームを呼ぶ
//         const render: FrameRequestCallback = (time) => {
//             orbitControls.update();
//             renderer.render(this.scene, camera);
//             requestAnimationFrame(render);
//         }
//         requestAnimationFrame(render);
//         renderer.domElement.style.cssFloat = "left";
//         renderer.domElement.style.margin = "10px";
//         return renderer.domElement;
//     }
//     // シーンの作成(全体で1回)
//     private createScene = () => {
//         this.scene = new THREE.Scene();
//         // // 頂点座標の定義
//         // const vertices = new Float32Array([
//         //     0,  1, 0, //1つ目の頂点座標
//         //     -1,  -1, 0, //2つ目の頂点座標
//         //     1, -1, 0, //3つ目の頂点座標
//         // ]);
// // //頂点座標
// // const vertices = new Float32Array([
// //     0,  1, 0, //1つ目の頂点座標
// //     -1,  -1, 0, //2つ目の頂点座標
// //     1, -1, 0, //3つ目の頂点座標
// // ]);
// // // 頂点インデックス
// // const indices = [ 
// //     0, 1, 2
// // ];
// // let colors = new Float32Array([
// //     1.0, 0.0, 0.0, //赤
// //     0.0, 1.0, 0.0, //緑
// //     0.0, 0.0, 1.0 //青
// // ]);
// // 頂点座標
// const vertices = new Float32Array([
//     -1, -1,  1, // 0: 左下前
//      1, -1,  1, // 1: 右下前
//      1,  1,  1, // 2: 右上前
//     -1,  1,  1, // 3: 左上前
//     -1, -1, -1, // 4: 左下後
//      1, -1, -1, // 5: 右下後
//      1,  1, -1, // 6: 右上後
//     -1,  1, -1  // 7: 左上後
// ]);
// // 頂点インデックス
// const indices = [
//     0, 1, 2, 2, 3, 0, // 前面
//     1, 5, 6, 6, 2, 1, // 右面
//     5, 4, 7, 7, 6, 5, // 背面
//     4, 0, 3, 3, 7, 4, // 左面
//     3, 2, 6, 6, 7, 3, // 上面
//     4, 5, 1, 1, 0, 4  // 下面
// ];
// // 色情報
// const colors = new Float32Array([
//   1.0, 1.0, 0.0, // : 黄 
//     0.0, 1.0, 0.0, // : 緑
//   0.0, 0.0, 0.0,  //: 黒
//  1.0, 0.0, 0.0, // : 赤
//      1.0, 1.0, 1.0, // : 白
//     0.0, 1.0, 1.0, // : シアン
//   0.0, 0.0, 1.0, // : 青
//     1.0, 0.0, 1.0// : 紫
// ]);
// const uvs = new Float32Array([
//     0.5, 1,
//     0, 0,
//     1, 0
// ]);
//         const geometry = new THREE.BufferGeometry();
//         geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
//         geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3));
//         geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2));
//         const loader = new THREE.TextureLoader();
// const texture = loader.load('parasol.jpg');
//         geometry.setIndex(indices);////追加  
//         geometry.computeVertexNormals();  
//         //const material = new THREE.MeshBasicMaterial( { color: new THREE.Color(1, 0, 0) } );
//         const material = new THREE.MeshBasicMaterial( { vertexColors:true } );
//         //const material = new THREE.MeshBasicMaterial( { map: texture} );
//         const mesh = new THREE.Mesh( geometry, material );
//         this.scene.add(mesh);
//         const axesBarLength = 10.0;
//         this.scene.add(new THREE.AxesHelper(axesBarLength));  //xyz軸
//         //ライトの設定
//         this.light = new THREE.DirectionalLight(0xffffff);
//         const lvec = new THREE.Vector3(1, 1, 1).normalize();
//         this.light.position.set(lvec.x, lvec.y, lvec.z);
//         this.scene.add(this.light);
//         // 毎フレームのupdateを呼んで，更新
//         // reqestAnimationFrame により次フレームを呼ぶ
//         let update: FrameRequestCallback = (time) => {
//             requestAnimationFrame(update);
//         }
//         requestAnimationFrame(update);
//     }
// }
// async function readFile(path): Promise<string> {
//     return new Promise((resolve => {
//         const loader = new THREE.FileLoader();
//         loader.load(path, (data) => {
//                 if(typeof data === "string") {
//                     resolve(data);
//                 } else {
//                     const decoder = new TextDecoder('utf-8');
//                     const decodedString = decoder.decode(data);
//                     resolve(decodedString);
//                 }
//             },
//         );
//     }));
// }
// window.addEventListener("DOMContentLoaded", init);
// function init() {
//     let container = new ThreeJSContainer();
//     let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(2, 2, 3));
//     document.body.appendChild(viewport);
// }
// // ////////////////////22FI004 阿部 明日樹以下は第5回 5-2///////////////////////////////////
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// class ThreeJSContainer {
//     private scene: THREE.Scene;
//     private light: THREE.Light;
//     constructor() {
//     }
//     // 画面部分の作成(表示する枠ごとに)*
//     public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
//         let renderer = new THREE.WebGLRenderer();
//         renderer.setSize(width, height);
//         renderer.setClearColor(new THREE.Color(0x495ed));
//         renderer.shadowMap.enabled = true; //シャドウマップを有効にする
//         //カメラの設定
//         let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//         camera.position.copy(cameraPos);
//         camera.lookAt(new THREE.Vector3(0, 0, 0));
//         let orbitControls = new OrbitControls(camera, renderer.domElement);
//         this.createScene();
//         // 毎フレームのupdateを呼んで，render
//         // reqestAnimationFrame により次フレームを呼ぶ
//         let render: FrameRequestCallback = (time) => {
//             orbitControls.update();
//             renderer.render(this.scene, camera);
//             requestAnimationFrame(render);
//         }
//         requestAnimationFrame(render);
//         renderer.domElement.style.cssFloat = "left";
//         renderer.domElement.style.margin = "10px";
//         return renderer.domElement;
//     }
//     // シーンの作成(全体で1回)
//     private createScene = () => {
//         this.scene = new THREE.Scene();
//         //ライトの設定
//         this.light = new THREE.DirectionalLight(0xffffff);
//         let lvec = new THREE.Vector3(1, 1, 1).normalize();
//         this.light.position.set(lvec.x, lvec.y, lvec.z);
//         this.scene.add(this.light);
//         let points:THREE.Vector2[] = [];
//         // points.push(new THREE.Vector2(0, -0.5));
//         // points.push(new THREE.Vector2(0.5, 0));
//         // points.push(new THREE.Vector2(0.0, 0.5));
//         let latheGeometry = new THREE.LatheGeometry(points);
//         let latheMaterial = new THREE.MeshNormalMaterial();
//         let latheMesh = new THREE.Mesh(latheGeometry, latheMaterial);
//         this.scene.add(latheMesh);
//         let drawShape = ()=> {
//             // THREE.Shapeを作成
//             let shape = new THREE.Shape();
//             // 形状を定義 
//             shape.moveTo(2, 2);
//             shape.lineTo(2, -2);
//             shape.lineTo(-2, -2);
//             shape.lineTo(-2, 2);
//             let hole = new THREE.Path();
//             hole.moveTo(-1.5, -0.5);
//             hole.lineTo(1.5, -0.5);
//             hole.lineTo(1.5, 1.3);
//             hole.lineTo(-1.5, 1.3);
//             hole.lineTo(-1.5, -0.5);
//             shape.holes.push(hole);
//             return shape;
//     }
//     let drawhole = ()=> {
//     let hole = new THREE.Shape();
//     hole.moveTo(-1.5, -0.5);
//     hole.lineTo(1.5, -0.5);
//     hole.lineTo(1.5, 1.3);
//     hole.lineTo(-1.5, 1.3);
//     return hole;
//     }
//     let extrudeSettings = {
//         steps: 2,
//         depth: 8,
//         bevelEnabled: false,
//         bevelThickness: 4,
//         bevelSize: 2,
//         bevelSegments: 3
//     };
//     let shapeGeometry = new THREE.ExtrudeGeometry(drawShape(), extrudeSettings)
//     let lineMaterial  = new THREE.LineBasicMaterial({color: 0xffffff, transparent:true, opacity:0.5}) 
//     let meshMaterial = new THREE.MeshPhongMaterial({color:0x00ffff, side:THREE.DoubleSide,flatShading:true});
//     let group = new THREE.Group();
//     group.add(new THREE.Mesh(shapeGeometry,meshMaterial));
//     group.add(new THREE.LineSegments(shapeGeometry,lineMaterial));
//     this.scene.add(group);
//     let shapeGeometry2 = new THREE.ExtrudeGeometry(drawhole(), extrudeSettings)
//     let lineMaterial2  = new THREE.LineBasicMaterial({color: 0xffffff, transparent:true, opacity:0.5}) 
//     let meshMaterial2 = new THREE.MeshPhongMaterial({color:0x0000ff, side:THREE.DoubleSide,flatShading:true});
//     let group2 = new THREE.Group();
//     group2.add(new THREE.Mesh(shapeGeometry2,meshMaterial2));
//     group2.add(new THREE.LineSegments(shapeGeometry2,lineMaterial2));
//     this.scene.add(group2);
//     // タイヤの生成
//     let tireRadius = 1;
//     let tireHeight = 0.5;
//     let tireGeometry = new THREE.CylinderGeometry(tireRadius, tireRadius, tireHeight, 32);
//     let tireMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
// // タイヤを直方体の両側に配置
// let A = 1.5;
// for (let j = -1; j <= 1; j += 2) {
//     for (let i = -1; i <= 1; i += 2) {
//     let tireMesh = new THREE.Mesh(tireGeometry, tireMaterial);
//     tireMesh.rotation.z = Math.PI / 2; // タイヤを水平に回転
//     tireMesh.position.set(i * 2, -1.5, A); // 位置調整
//     this.scene.add(tireMesh);
//     }
//     A += 5;
// }
// // まどの生成
// let windowWidth = 4.1;
// let windowHeight = 1.8;
// let windowDepth = 2.3;
// let windowGeometry = new THREE.BoxGeometry(windowWidth, windowHeight, windowDepth);
// let windowMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff});
//     for (let i = 0; i <= 1; i += 1) {
//         let windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
//         windowMesh.position.set(0, 0.6, 2.5 + i * 3); 
//         this.scene.add(windowMesh);
//     }
//         // 毎フレームのupdateを呼んで，更新
//         // reqestAnimationFrame により次フレームを呼ぶ
//         let update: FrameRequestCallback = (time) => {
//             requestAnimationFrame(update);
//         }
//         requestAnimationFrame(update);
//     }
// }
// window.addEventListener("DOMContentLoaded", init);
// function init() {
//     let container = new ThreeJSContainer();
//     let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(0, 8, 15));
//     document.body.appendChild(viewport);
// }
// //////////////////22FI004 阿部 明日樹以下は第5回 5-1///////////////////////////////////
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// class ThreeJSContainer {
//     private scene: THREE.Scene;
//     private light: THREE.Light;
//     constructor() {
//     }
//     // 画面部分の作成(表示する枠ごとに)*
//     public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
//         let renderer = new THREE.WebGLRenderer();
//         renderer.setSize(width, height);
//         renderer.setClearColor(new THREE.Color(0x495ed));
//         renderer.shadowMap.enabled = true; //シャドウマップを有効にする
//         //カメラの設定
//         let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//         camera.position.copy(cameraPos);
//         camera.lookAt(new THREE.Vector3(0, 0, 0));
//         let orbitControls = new OrbitControls(camera, renderer.domElement);
//         this.createScene();
//         // 毎フレームのupdateを呼んで，render
//         // reqestAnimationFrame により次フレームを呼ぶ
//         let render: FrameRequestCallback = (time) => {
//             orbitControls.update();
//             renderer.render(this.scene, camera);
//             requestAnimationFrame(render);
//         }
//         requestAnimationFrame(render);
//         renderer.domElement.style.cssFloat = "left";
//         renderer.domElement.style.margin = "10px";
//         return renderer.domElement;
//     }
//     // シーンの作成(全体で1回)
//     private createScene = () => {
//         this.scene = new THREE.Scene();
//         //ライトの設定
//         this.light = new THREE.DirectionalLight(0xffffff);
//         let lvec = new THREE.Vector3(1, 1, 1).normalize();
//         this.light.position.set(lvec.x, lvec.y, lvec.z);
//         this.scene.add(this.light);
//         let points:THREE.Vector2[] = [];
//         /* points.push(new THREE.Vector2(0, -0.5));
//          points.push(new THREE.Vector2(0.5, 0));
//          points.push(new THREE.Vector2(0.0, 0.5));
//          */
//         let pointNum = 10;
//         for (let i = -4; i <= 4; i += 0.5) {
//             let x = i;
//             let y = Math.exp(x * 0.3)* 0.5; // 係数を調整して形を制御
//             points.push(new THREE.Vector2(y, x));
//         }
//         /*let drawShape = ()=> {
//             // THREE.Shapeを作成
//             let shape = new THREE.Shape();
//             // 形状を定義
//             // shape.moveTo(1, 1);
//             // shape.lineTo(1, -1);
//             // shape.lineTo(-1, -1);
//             // shape.lineTo(-1, 1);
//             shape.moveTo(1, 1);
//             shape.lineTo(1, -1);
//             shape.quadraticCurveTo(0, -2, -1, -1);
//             shape.lineTo(-1, 1);
//             let hole = new THREE.Path();
//             hole.absellipse(0, 0, 0.25, 0.25, 0, Math.PI * 2, false, 0);
//             shape.holes.push(hole);
//             return shape;
//         }
//         */
//        let latheGeometry = new THREE.LatheGeometry(points);
//         //let latheMaterial = new THREE.MeshNormalMaterial();
//         let latheMaterial = new THREE.MeshNormalMaterial({side:THREE.DoubleSide});
//         let latheMesh = new THREE.Mesh(latheGeometry, latheMaterial);
//         this.scene.add(latheMesh);
//         /*
//         let shapeGeometry = new THREE.ShapeGeometry(drawShape());
//         let lineMaterial  = new THREE.LineBasicMaterial({color: 0xffffff, transparent:true, opacity:0.5}) 
//         let meshMaterial = new THREE.MeshPhongMaterial({color:0x00ffff, side:THREE.DoubleSide,flatShading:true});
//         let group = new THREE.Group();
//         group.add(new THREE.Mesh(shapeGeometry,meshMaterial));
//         group.add(new THREE.LineSegments(shapeGeometry,lineMaterial));
//         this.scene.add(group);
//         */
//         let extrudeSettings = {
//             steps: 2,
//             depth: 4,
//             bevelEnabled: false,
//             bevelThickness: 4,
//             bevelSize: 2,
//             bevelSegments: 3
//             };
//         // let shapeGeometry = new THREE.ExtrudeGeometry(drawShape(), extrudeSettings)
//         // let lineMaterial = new THREE.LineBasicMaterial({color: 0xffffff, transparent:true, opacity:0.5});
//         // let meshMaterial = new THREE.MeshPhongMaterial({color:0x00ffff, side:THREE.DoubleSide,flatShading:true});
//         // let mesh = new THREE.Mesh(shapeGeometry,meshMaterial);
//         // let line = new THREE.Line(shapeGeometry,lineMaterial);
//         // let group = new THREE.Group();
//         // group.add(mesh);
//         // group.add(line);
//         // this.scene.add(group);
//         // 毎フレームのupdateを呼んで，更新
//         // reqestAnimationFrame により次フレームを呼ぶ
//         let update: FrameRequestCallback = (time) => {
//             requestAnimationFrame(update);
//         }
//         requestAnimationFrame(update);
//     }
// }
// window.addEventListener("DOMContentLoaded", init);
// function init() {
//     let container = new ThreeJSContainer();
//     let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(0, 8, 8));
//     document.body.appendChild(viewport);
// }
/*////////////////////22FI004 阿部 明日樹以下は第4回///////////////////////////////////
import GUI from 'lil-gui';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class ThreeJSContainer {
    private scene: THREE.Scene;
    private geometry: THREE.BufferGeometry;
    private material: THREE.Material;
    private cube: THREE.Mesh;
    private light: THREE.Light;

    constructor() {

    }

    // 画面部分の作成(表示する枠ごとに)*
    public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new THREE.Color(0x495ed));
        renderer.shadowMap.enabled = true; //シャドウマップを有効にする

        //カメラの設定
        let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        let orbitControls = new OrbitControls(camera, renderer.domElement);

        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        let render: FrameRequestCallback = (time) => {
            orbitControls.update();

            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    }

    // シーンの作成(全体で1回)
    private createScene = () => {
        this.scene = new THREE.Scene();
        

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        let gui = new GUI(); // GUI用のインスタンスの生成
        /*
        this.material = new THREE.MeshLambertMaterial({ color: 0x55ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.castShadow = true;
        this.scene.add(this.cube);
        let guiObj = { rotationSpeedX: 0.05, rotationSpeedY: 0.05};
        gui.add(guiObj, "rotationSpeedX", 0.0, 0.2);
        gui.add(guiObj, "rotationSpeedY", 0.0, 0.2)
        */
/*let guiObj = { color: '0xffffff'};
gui.addColor(guiObj, "color");
*/
/*let guiObj = { visible: true};
gui.add(guiObj, "visible");
*/
/*let guiObj = { size: 'Medium'}
gui.add( guiObj, 'size', [ 'Small', 'Medium', 'Large' ] )

let guiObj = { object: 'Wave'}
gui.add( guiObj, 'object', [ 'Wave', 'Klein' ] )

let Wave = (u:number, v:number, target:THREE.Vector3) =>{
/*   let r = 30;
    let x = u * r - r/2;
    let y = Math.sin(x) * 2.0;
    let z = v * r - r/2;
    target.set(x, y, z);
 
    let r = 30;
    let x = (u - 0.5) * r;
    let z = (v - 0.5) * r;
    let y = Math.sin(Math.sqrt(x * x + z * z) * 1.0) * 2.0;  // 中心からの距離に応じて波を生成
    target.set(x, y, z);
    

}
let Klein = (u:number, v:number, target:THREE.Vector3) =>{
      let U =  2*  u * Math.PI;
      let V = 2 * v * Math.PI ;
    
       let r = 4 - 2 * Math.cos(U);
    let x;
    let y;
    if(0 <= U && U < Math.PI){
            x = 6 * Math.cos(U) *(1 + Math.sin(U)) + r * Math.cos(U) * Math.cos(V);
            y = 16 *  Math.sin(U) + r * Math.sin(U) * Math.cos(V);
       }else if(Math.PI <= U  && U <= 2 * Math.PI){
            x = 6 * Math.cos(U) *(1 + Math.sin(U)) + r * Math.cos(V + Math.PI);
            y = 16 * Math.sin(U);
}
   let z = Math.sin(V) * r;
target.set(x, y, z);

}
let paramGeometry = new THREE.ParametricGeometry(Wave, 30, 30);
let paramMaterial = new THREE.MeshPhongMaterial({color:0x00ffff, side:THREE.DoubleSide,flatShading:true});
let lineMaterial  = new THREE.LineBasicMaterial({color: 0xffffff,transparent:true, opacity:0.5});
let group = new THREE.Group();
group.add(new THREE.Mesh(paramGeometry,paramMaterial));
group.add(new THREE.LineSegments(paramGeometry,lineMaterial));


let paramGeometry2 = new THREE.ParametricGeometry(Klein, 30, 30);
let paramMaterial2 = new THREE.MeshPhongMaterial({color:0x00ffff, side:THREE.DoubleSide,flatShading:true});
let lineMaterial2  = new THREE.LineBasicMaterial({color: 0xffffff,transparent:true, opacity:0.5});
let group2 = new THREE.Group();
group2.add(new THREE.Mesh(paramGeometry2,paramMaterial2));
group2.add(new THREE.LineSegments(paramGeometry2,lineMaterial2
));


//ライトの設定
this.light = new THREE.DirectionalLight(0xffffff);
let lvec = new THREE.Vector3(1, 1, 1).normalize();
this.light.position.set(lvec.x, lvec.y, lvec.z);
this.scene.add(this.light);

// 毎フレームのupdateを呼んで，更新
// reqestAnimationFrame により次フレームを呼ぶ
let update: FrameRequestCallback = (time) => {
//    this.cube.rotateX(0.01);
//    this.cube.rotateX(guiObj.rotationSpeedX);
//    this.cube.rotateY(guiObj.rotationSpeedY);

if(guiObj.object == "Wave"){
    this.scene.remove(group2);
    this.scene.add(group);
}
if(guiObj.object == "Klein"){
    this.scene.remove(group);
    this.scene.add(group2);
}

    requestAnimationFrame(update);
}
requestAnimationFrame(update);
}
}

window.addEventListener("DOMContentLoaded", init);

function init() {
let container = new ThreeJSContainer();

let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(-15, 15, 15));
document.body.appendChild(viewport);
}
*/
////////////////////22FI004 阿部 明日樹以下は第3回/////////////////////////////////////
/*
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class ThreeJSContainer {
    private scene: THREE.Scene;
    private plane: THREE.Mesh;
    private group: THREE.Group;

    constructor() {

    }

    // 画面部分の作成(表示する枠ごとに)*
    public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new THREE.Color(0x495ed));
        renderer.shadowMap.enabled = true; //シャドウマップを有効にする

        //カメラの設定
       // let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
       let camera = new THREE.OrthographicCamera(width/-150.0, width/150.0, height/150.0, height/-150.0, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        let orbitControls = new OrbitControls(camera, renderer.domElement);

        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        let render: FrameRequestCallback = (time) => {
            orbitControls.update();

            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    }

    // シーンの作成(全体で1回)
    private createScene = () => {
        this.scene = new THREE.Scene();
        this.group = new THREE.Group();

        //let geometry = new THREE.BoxGeometry(1, 1, 1);
        //let geometry = new THREE.SphereGeometry(0.7, 20, 20);
        //let geometry = new THREE.BoxGeometry(1, 1, 1);
        let geometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
        
        let matArray = [];
        for (let A = 0; A < 3; A++) {
            matArray.push(new THREE.MeshStandardMaterial({ color: 0x009e60, metalness: 0.3, roughness: 0.8 }));
            matArray.push(new THREE.MeshBasicMaterial({ color: 0xff5800 }));
            matArray.push(new THREE.MeshBasicMaterial({ color: 0xc41e3a }));
            matArray.push(new THREE.MeshBasicMaterial({ color: 0xadff2fff}));
            matArray.push(new THREE.MeshPhongMaterial({ color: 0xff5800, shininess: 100 }));
            matArray.push(new THREE.MeshBasicMaterial({ color: 0x55ff00 }));
            matArray.push(new THREE.MeshBasicMaterial({ color: 0xff00ffff }));
            matArray.push(new THREE.MeshStandardMaterial({ color: 0x0051ba, metalness: 0.6, roughness: 0.4 }));
            matArray.push(new THREE.MeshBasicMaterial({ color: 0xffd700ff }));
        }
        //let material = new THREE.MeshStandardMaterial({ color: 0x55ff00 });
        //let material  = new THREE.MeshBasicMaterial({ color: 0x55ff00 });
        //let material = new THREE.MeshBasicMaterial({ color: 0x000fff });
        //let material = new THREE.MeshNormalMaterial();
        //let material = new THREE.MeshLambertMaterial({color: 0x55ff00});
        //let material = new THREE.MeshPhongMaterial({color: 0x55ff00});
        //let material = new THREE.MeshStandardMaterial({ color: 0x55ff00 });
        //material.metalness = 0;//値を変えてみましょう
        //material.roughness = 0;//値を変えてみましょう
        //material.wireframe = true;
        //material.opacity = 0.1;
        //material.transparent = true;
        //material.visible = false;

        // オブジェクトを3x3に並べて生成
        for (let x = 0; x < 3; x++) {
            for (let z = 0; z < 3; z++) {
                for (let y = 0; y < 3; y++) {
                // メッシュの生成
                //let mesh = new THREE.Mesh(geometry, material);
                let mesh = new THREE.Mesh(geometry, matArray[(x + y + z) % matArray.length]);

                mesh.castShadow = true;
                // メッシュの位置を設定
                mesh.position.set(x * 2 - 2, y * 2 - 2, z * 2 - 2) ;
                // メッシュをシーンに追加
                this.group.add(mesh);
                //this.scene.add(mesh);
                }
            }
        }
        this.scene.add(this.group);
        // 平面の生成
        let planeGeometry = new THREE.PlaneGeometry(20, 20);
        let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xff00ff });
        this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
        this.plane.receiveShadow = true; //影を受けるようにする
        this.plane.position.y = -5;
        this.plane.rotation.x = -Math.PI / 2;
        this.scene.add(this.plane);

        //ライトの設定
        let light = new THREE.DirectionalLight(0xffffff, 1.0);
        light.position.set(1, 1, 1);
        light.target = this.plane;
        light.castShadow = true;
        this.scene.add(light);

        // 毎フレームのupdateを呼んで，更新
        // reqestAnimationFrame により次フレームを呼ぶ
        let update: FrameRequestCallback = (time) => {
            this.group.rotateX(0.01); // 追加
            requestAnimationFrame(update);
            this.group.rotateY(0.015);
            this.group.rotateZ(0.005);
          }
        requestAnimationFrame(update);
    }
}

window.addEventListener("DOMContentLoaded", init);

function init() {
    let container = new ThreeJSContainer();

    let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(-3, 3, 3));
    document.body.appendChild(viewport);
}


////////////////////22FI004 阿部 明日樹以下は第二回/////////////////////////////////////
/*
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class ThreeJSContainer {
    private scene: THREE.Scene;
    private geometry: THREE.BufferGeometry;
    private material: THREE.Material;
    private cube: THREE.Mesh;
    private light: THREE.Light;

    constructor() {

    }

    // 画面部分の作成(表示する枠ごとに)*
    public createRendererDOM = (width: number, height: number, cameraPos: THREE.Vector3) => {
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new THREE.Color(0x495ed));

        //カメラの設定
        let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        let orbitControls = new OrbitControls(camera, renderer.domElement);

        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        let render: FrameRequestCallback = (time) => {
            orbitControls.update();

            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    }

    // シーンの作成(全体で1回)
    private createScene = () => {
        this.scene = new THREE.Scene();

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshLambertMaterial({ color: 0x55ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.castShadow = true;
        //this.scene.add(this.cube);

        let addcube = () => {
            //Cubeのサイズを決める
            let cubeSize: number = Math.ceil(1);
            //GeometryとMaterialを作成する
            let cubeGeometry: THREE.BufferGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            let cubeMaterial: THREE.Material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
            //Cubeオブジェクトを生成する
            let cubeAdd: THREE.Mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
            //Cubeオブジェクトのプロパティを設定する
            cubeAdd.castShadow = true;
            cubeAdd.name = "cube-" + this.scene.children.length;
            //Cubeオブジェクトを移動する
            cubeAdd.position.x = Math.round((Math.random() * 10)) - 5;
            cubeAdd.position.y = Math.round((Math.random() * 5)) - 2.5;
            cubeAdd.position.z = Math.round((Math.random() * 2));
            //Cubeオブジェクトを回転させる
            cubeAdd.rotation.x = THREE.MathUtils.degToRad(Math.random() * 45);
            cubeAdd.rotation.y = THREE.MathUtils.degToRad(Math.random() * 45);
            //シーンに追加する
            this.scene.add(cubeAdd);
        }

        /* for (let i: number = 0; i < 10; i++) {
            addcube();
         }
*/
/*
        console.log("Hello"); //ログの吐き出し



        let addObject = () => {
            //Geometryの生成
            let addObjectGeometry: THREE.BufferGeometry = new THREE.PlaneGeometry(10, 10);
            //Materialの生成
            let meshMaterial: THREE.Material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
            //オブジェクトの生成
            let addObject: THREE.Mesh = new THREE.Mesh(addObjectGeometry, meshMaterial);
            //オブジェクトのシーンへの追加
            this.scene.add(addObject);
        }
        addObject();

        let addObject2 = () => {
            //Geometryの生成
            //let addObjectGeometry: THREE.BufferGeometry = new THREE.PlaneGeometry( 1.5, 1.5, 1.5, 1.5);//
            let addObjectGeometry: THREE.BufferGeometry = new THREE.SphereGeometry(0.5, 32, 16, 0, 2 * Math.PI, 0, Math.PI);
            //Materialの生成
            let meshMaterial: THREE.Material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
            //オブジェクトの生成
            let addObject: THREE.Mesh = new THREE.Mesh(addObjectGeometry, meshMaterial);
            //Cubeオブジェクトのプロパティを設定する
            addObject.castShadow = true;
            addObject.name = "cube-" + this.scene.children.length;
            //Cubeオブジェクトを移動する
            addObject.position.x = Math.round((Math.random() * 10)) - 5;
            addObject.position.y = Math.round((Math.random() * 5)) - 2.5;
            addObject.position.z = Math.round((Math.random() * 2));
            //Cubeオブジェクトを回転させる
            addObject.rotation.x = THREE.MathUtils.degToRad(Math.random() * 45);
            addObject.rotation.y = THREE.MathUtils.degToRad(Math.random() * 45);
            //オブジェクトのシーンへの追加
            this.scene.add(addObject);
        }
        /*for (let i: number = 0; i < 10; i++) {
           addObject2();
        }*/
/*
        let addObject3 = () => {
            //Geometryの生成
            //let addObjectGeometry: THREE.BufferGeometry = new THREE.PlaneGeometry( 1.5, 1.5, 1.5, 1.5);//
            let addObjectGeometry: THREE.BufferGeometry = new THREE.TorusGeometry(0.5, 0.4, 12, 48, 2 * Math.PI);
            //Materialの生成
            let meshMaterial: THREE.Material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
            //オブジェクトの生成
            let addObject: THREE.Mesh = new THREE.Mesh(addObjectGeometry, meshMaterial);
            //Cubeオブジェクトのプロパティを設定する
            addObject.castShadow = true;
            addObject.name = "cube-" + this.scene.children.length;
            //Cubeオブジェクトを移動する
            addObject.position.x = Math.round((Math.random() * 10)) - 5;
            addObject.position.y = Math.round((Math.random() * 5)) - 2.5;
            addObject.position.z = Math.round((Math.random() * 2));
            //Cubeオブジェクトを回転させる
            addObject.rotation.x = THREE.MathUtils.degToRad(Math.random() * 45);
            addObject.rotation.y = THREE.MathUtils.degToRad(Math.random() * 45);
            //オブジェクトのシーンへの追加
            this.scene.add(addObject);
        }
        for (let i: number = 0; i < 30; i++) {
            let A = (Math.random() * 30);
            if (A < 10) {
                addObject3();
            } else if (10 <= A && A < 20) {
                addcube();
            } else {
                addObject2();
            }
        }

        //ライトの設定
        this.light = new THREE.DirectionalLight(0xffffff);
        let lvec = new THREE.Vector3(1, 1, 1).normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);

        // 毎フレームのupdateを呼んで，更新
        // reqestAnimationFrame により次フレームを呼ぶ
        let update: FrameRequestCallback = (time) => {
            this.cube.rotateX(0.01);

            requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }
}

window.addEventListener("DOMContentLoaded", init);

function init() {
    let container = new ThreeJSContainer();

    let viewport = container.createRendererDOM(640, 480, new THREE.Vector3(-3, 3, 3));
    document.body.appendChild(viewport);
}
*/


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_three_examples_jsm_controls_OrbitControls_js"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW5kZXJpbmcvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vMjJGSTAwNCDpmL/pg6gg5piO5pel5qi55Lul5LiL44Gv5pyA57WC6Kqy6aGMIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xuXG5jbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcbiAgICBwcml2YXRlIHNub3c6IFRIUkVFLlBvaW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aWR0aCAvIGhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zKTtcbiAgICAgICAgY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG5cbiAgICAgICAgY29uc3Qgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gICAgICAgIGNvbnN0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgb3JiaXRDb250cm9scy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NlbmUoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDQ5NWVkKTtcblxuICAgICAgICAvLyDlnLDpnaLjga7kvZzmiJBcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDI1LCAyNSk7XG4gICAgICAgIGNvbnN0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHg5OWZmOTkgfSk7XG4gICAgICAgIGNvbnN0IHBsYW5lTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpO1xuICAgICAgICBwbGFuZU1lc2gucm90YXRpb24ueCA9IC1NYXRoLlBJIC8gMjtcbiAgICAgICAgcGxhbmVNZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChwbGFuZU1lc2gpO1xuXG4gICAgICAgIC8vIOmbquOBoOOCi+OBvuOBruS9nOaIkFxuICAgICAgICBjb25zdCBjb2xvcnMgPSBbMHhmZjAwMDAsIDB4MDAwMGZmLCAweGZmZmYwMCwgMHgwMGZmMDAsIDB4ODAwMDgwLCAweGZmYzBjYiwgMHhmZmE1MDAsIDB4ZmZmZmZmLCAweDAwMDAwMF07XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDU7XG4gICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9ICgyICogTWF0aC5QSSkgLyA5O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc25vd21hbiA9IHRoaXMuY3JlYXRlU25vd21hbihjb2xvcnNbaV0pO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBpICogYW5nbGVTdGVwO1xuICAgICAgICAgICAgc25vd21hbi5wb3NpdGlvbi5zZXQocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpLCAwLCByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoc25vd21hbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDjg6njgqTjg4jjga7oqK3lrppcbiAgICAgICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbiAgICAgICAgY29uc3QgbHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLm5vcm1hbGl6ZSgpO1xuICAgICAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldChsdmVjLngsIGx2ZWMueSwgbHZlYy56KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgICAgICAgLy8g6Zuq44Gu44Ko44OV44Kn44Kv44OIXG4gICAgICAgIGNvbnN0IHNub3dHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgICBjb25zdCBzbm93Q291bnQgPSAxMDAwO1xuICAgICAgICBjb25zdCBzbm93VmVydGljZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbm93Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDI1O1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiA1MDtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLnJhbmRvbSgpICogNTAgLSAyNTtcbiAgICAgICAgICAgIHNub3dWZXJ0aWNlcy5wdXNoKHgsIHksIHopO1xuICAgICAgICB9XG4gICAgICAgIHNub3dHZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoc25vd1ZlcnRpY2VzLCAzKSk7XG4gICAgICAgIGNvbnN0IHNub3dNYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgc2l6ZTogMC4xIH0pO1xuICAgICAgICB0aGlzLnNub3cgPSBuZXcgVEhSRUUuUG9pbnRzKHNub3dHZW9tZXRyeSwgc25vd01hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5zbm93KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNub3dtYW4gPSAoY29sb3I6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyDkuIvjga7nkINcbiAgICAgICAgY29uc3QgYm90dG9tR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC42LCAzMiwgMzIpO1xuICAgICAgICBjb25zdCBib3R0b21NYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbmV3IFRIUkVFLk1lc2goYm90dG9tR2VvbWV0cnksIGJvdHRvbU1hdGVyaWFsKTtcbiAgICAgICAgYm90dG9tLnBvc2l0aW9uLnNldCgwLCAwLjYsIDApO1xuXG4gICAgICAgIC8vIOS4reWkruOBrueQg1xuICAgICAgICBjb25zdCBtaWRkbGVHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjQsIDMyLCAzMik7XG4gICAgICAgIGNvbnN0IG1pZGRsZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuICAgICAgICBjb25zdCBtaWRkbGUgPSBuZXcgVEhSRUUuTWVzaChtaWRkbGVHZW9tZXRyeSwgbWlkZGxlTWF0ZXJpYWwpO1xuICAgICAgICBtaWRkbGUucG9zaXRpb24uc2V0KDAsIDEuNCwgMCk7XG5cbiAgICAgICAgLy8g6aCt44Gu55CDXG4gICAgICAgIGNvbnN0IGhlYWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjMsIDMyLCAzMik7XG4gICAgICAgIGNvbnN0IGhlYWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgY29uc3QgaGVhZCA9IG5ldyBUSFJFRS5NZXNoKGhlYWRHZW9tZXRyeSwgaGVhZE1hdGVyaWFsKTtcbiAgICAgICAgaGVhZC5wb3NpdGlvbi5zZXQoMCwgMi4xLCAwKTtcblxuICAgICAgICAvLyDnm65cbiAgICAgICAgY29uc3QgZXllR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC4wNSwgMzIsIDMyKTtcbiAgICAgICAgY29uc3QgZXllTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAgfSk7XG5cbiAgICAgICAgY29uc3QgbGVmdEV5ZSA9IG5ldyBUSFJFRS5NZXNoKGV5ZUdlb21ldHJ5LCBleWVNYXRlcmlhbCk7XG4gICAgICAgIGxlZnRFeWUucG9zaXRpb24uc2V0KC0wLjEsIDIuMiwgMC4yNSk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRFeWUgPSBuZXcgVEhSRUUuTWVzaChleWVHZW9tZXRyeSwgZXllTWF0ZXJpYWwpO1xuICAgICAgICByaWdodEV5ZS5wb3NpdGlvbi5zZXQoMC4xLCAyLjIsIDAuMjUpO1xuXG4gICAgICAgIC8vIOm8u1xuICAgICAgICBjb25zdCBub3NlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KDAuMDUsIDAuMiwgMzIpO1xuICAgICAgICBjb25zdCBub3NlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmE1MDAgfSk7XG4gICAgICAgIGNvbnN0IG5vc2UgPSBuZXcgVEhSRUUuTWVzaChub3NlR2VvbWV0cnksIG5vc2VNYXRlcmlhbCk7XG4gICAgICAgIG5vc2Uucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuICAgICAgICBub3NlLnBvc2l0aW9uLnNldCgwLCAyLjEsIDAuMzUpO1xuXG4gICAgICAgIC8vIOW4veWtkO+8iOODkOOCseODhO+8iVxuICAgICAgICBjb25zdCBoYXRHZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMiwgMC4zLCAwLjQsIDMyKTtcbiAgICAgICAgY29uc3QgaGF0TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgIGNvbnN0IGhhdCA9IG5ldyBUSFJFRS5NZXNoKGhhdEdlb21ldHJ5LCBoYXRNYXRlcmlhbCk7XG4gICAgICAgIGhhdC5wb3NpdGlvbi5zZXQoMCwgMi41LCAwKTtcblxuICAgICAgICAvLyDpm6rjgaDjgovjgb7jga7jgrDjg6vjg7zjg5fljJZcbiAgICAgICAgY29uc3Qgc25vd21hbiA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBzbm93bWFuLmFkZChib3R0b20pO1xuICAgICAgICBzbm93bWFuLmFkZChtaWRkbGUpO1xuICAgICAgICBzbm93bWFuLmFkZChoZWFkKTtcbiAgICAgICAgc25vd21hbi5hZGQobGVmdEV5ZSk7XG4gICAgICAgIHNub3dtYW4uYWRkKHJpZ2h0RXllKTtcbiAgICAgICAgc25vd21hbi5hZGQobm9zZSk7XG4gICAgICAgIHNub3dtYW4uYWRkKGhhdCk7XG5cbiAgICAgICAgcmV0dXJuIHNub3dtYW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVTY2VuZSA9ICgpID0+IHtcbiAgICAgICAgLy8g5YaG5b2i44Gr5bmz6KGM56e75YuVXG4gICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGNoaWxkLnBvc2l0aW9uLnosIGNoaWxkLnBvc2l0aW9uLngpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FuZ2xlID0gYW5nbGUgKyAwLjAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGguc3FydChjaGlsZC5wb3NpdGlvbi54ICogY2hpbGQucG9zaXRpb24ueCArIGNoaWxkLnBvc2l0aW9uLnogKiBjaGlsZC5wb3NpdGlvbi56KTtcbiAgICAgICAgICAgICAgICBjaGlsZC5wb3NpdGlvbi5zZXQocmFkaXVzICogTWF0aC5jb3MobmV3QW5nbGUpLCAwLCByYWRpdXMgKiBNYXRoLnNpbihuZXdBbmdsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDpm6rjga7jgqjjg5Xjgqfjgq/jg4jjgpLmm7TmlrBcbiAgICAgICAgdGhpcy5zbm93LnBvc2l0aW9uLnkgLT0gMC4xO1xuICAgICAgICBpZiAodGhpcy5zbm93LnBvc2l0aW9uLnkgPCAtMjUpIHtcbiAgICAgICAgICAgIHRoaXMuc25vdy5wb3NpdGlvbi55ID0gMjU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gbmV3IFRocmVlSlNDb250YWluZXIoKTtcbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDIsIDIsIDMpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbn1cblxuLy8gLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8yMkZJMDA0IOmYv+mDqCDmmI7ml6XmqLnku6XkuIvjga/nrKwxM+WbniAxMy0xIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBpbXBvcnQgKiBhcyBDQU5OT04gZnJvbSAnY2Fubm9uLWVzJztcbi8vIGltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuLy8gaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuXG4vLyBjbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbi8vICAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbi8vICAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcblxuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuXG4vLyAgICAgfVxuXG4vLyAgICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspKlxuLy8gICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuLy8gICAgICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlOyAvL+OCt+ODo+ODieOCpuODnuODg+ODl+OCkuacieWKueOBq+OBmeOCi1xuXG4vLyAgICAgICAgICAvL+OCq+ODoeODqeOBruioreWumlxuLy8gICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuLy8gICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuLy8gICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuLy8gICAgICAgICBjb25zdCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuLy8gICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4vLyAgICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIxyZW5kZXJcbi8vICAgICAgICAgIC8vIHJlcWVzdEFuaW1hdGlvbkZyYW1lIOOBq+OCiOOCiuasoeODleODrOODvOODoOOCkuWRvOOBtlxuLy8gICAgICAgICBjb25zdCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbi8vICAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbi8vICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuLy8gICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbi8vICAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuLy8gICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuLy8gICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbi8vICAgICB9XG5cbi8vICAgICAgLy8g44K344O844Oz44Gu5L2c5oiQKOWFqOS9k+OBpzHlm54pXG4vLyAgICAgcHJpdmF0ZSBjcmVhdGVTY2VuZSA9ICgpID0+IHtcbi8vICAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4vLyAgICAgICAgICAvLyDjgrDjg6rjg4Pjg4nooajnpLpcbi8vICAgICAgICAgY29uc3QgZ3JpZEhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKCAxMCwpO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZCggZ3JpZEhlbHBlciApOyAgXG5cbi8vICAgICAgICAgIC8vIOi7uOihqOekulxuLy8gICAgICAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoIDUgKTtcbi8vICAgICAgICAgdGhpcy5zY2VuZS5hZGQoIGF4ZXNIZWxwZXIgKTtcbiAgICAgICAgXG4vLyAgICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxuLy8gICAgICAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuLy8gICAgICAgICBjb25zdCBsdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkubm9ybWFsaXplKCk7XG4vLyAgICAgICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KGx2ZWMueCwgbHZlYy55LCBsdmVjLnopO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuXG4vLyAgICAgICAgIGNvbnN0IHdvcmxkID0gbmV3IENBTk5PTi5Xb3JsZCh7IGdyYXZpdHk6IG5ldyBDQU5OT04uVmVjMygwLCAtOS44MiwgMCl9KTtcbi8vICAgICAgICAgd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDAuMDE7XG4vLyAgICAgICAgIHdvcmxkLmRlZmF1bHRDb250YWN0TWF0ZXJpYWwucmVzdGl0dXRpb24gPSA0O1xuXG4vLyAgICAgICAgICAvL2JveOOBrui/veWKoFxuLy8gICAgICAgICAgLy8gY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XG4vLyAgICAgICAgIC8vIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSk7XG4vLyAgICAgICAgIC8vIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuLy8gICAgICAgICAvLyBjdWJlLnBvc2l0aW9uLnkgPSAzO1xuLy8gICAgICAgICAvLyB0aGlzLnNjZW5lLmFkZChjdWJlKTtcblxuLy8gICAgICAgICAvLyBjb25zdCBjdWJlU2hhcGUgPSBuZXcgQ0FOTk9OLkJveChuZXcgQ0FOTk9OLlZlYzMoMC41LCAwLjUsIDAuNSkpO1xuLy8gICAgICAgICAvLyBjb25zdCBjdWJlQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDEgfSk7XG4vLyAgICAgICAgIC8vIGN1YmVCb2R5LmFkZFNoYXBlKGN1YmVTaGFwZSk7XG4vLyAgICAgICAgIC8vIGN1YmVCb2R5LnBvc2l0aW9uLnNldChjdWJlLnBvc2l0aW9uLngsIGN1YmUucG9zaXRpb24ueSwgY3ViZS5wb3NpdGlvbi56KTtcbi8vICAgICAgICAgLy8gY3ViZUJvZHkucXVhdGVybmlvbi5zZXQoY3ViZS5xdWF0ZXJuaW9uLngsIGN1YmUucXVhdGVybmlvbi55LCBjdWJlLnF1YXRlcm5pb24ueiwgY3ViZS5xdWF0ZXJuaW9uLncpO1xuLy8gICAgICAgICAvLyB3b3JsZC5hZGRCb2R5KGN1YmVCb2R5KTtcblxuLy8gLy8g44OJ44Of44OO44KS5L2c5oiQXG4vLyBjb25zdCBkb21pbm9zID0gW107XG4vLyBjb25zdCBkb21pbm9Cb2RpZXMgPSBbXTtcbi8vIGNvbnN0IGRvbWlub0dlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMjUsIDAuNSAsMC4xKTsgLy8g5bmFMC4y44CB6auY44GVMuOAgeWlpeihjOOBjTHjga7nq4vmlrnkvZNcbi8vIGNvbnN0IGRvbWlub01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSk7XG4vLyBjb25zdCByYWRpdXMgPSAxLjA7IC8vIOODieODn+ODjuOCkumFjee9ruOBmeOCi+WGhuOBruWNiuW+hFxuLy8gY29uc3QgbnVtRG9taW5vcyA9IDIwOyAvLyDjg4njg5/jg47jga7mlbBcblxuXG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRG9taW5vczsgaSsrKSB7XG4vLyAgICAgY29uc3QgZG9taW5vID0gbmV3IFRIUkVFLk1lc2goZG9taW5vR2VvbWV0cnksIGRvbWlub01hdGVyaWFsKTtcbi8vICAgICBjb25zdCBhbmdsZSA9IChpIC8gbnVtRG9taW5vcykgKiAyICogTWF0aC5QSTtcbi8vICAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpO1xuLy8gICAgIGNvbnN0IHogPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG5cbi8vICAgICAvL2RvbWluby5wb3NpdGlvbi5zZXQoaSAqIDEuMjUsIDEsIDApOyAvLyDlkITjg4njg5/jg47jgpLpmqPjgorlkIjjgYbjgojjgYbjgavphY3nva5cbi8vICAgICBkb21pbm8ucG9zaXRpb24uc2V0KHgsIDEsIHopO1xuLy8gICAgIGRvbWluby5yb3RhdGlvbi55ID0gLWFuZ2xlO1xuLy8gICAgIHRoaXMuc2NlbmUuYWRkKGRvbWlubyk7XG4vLyAgICAgZG9taW5vcy5wdXNoKGRvbWlubyk7XG5cbi8vICAgICBjb25zdCBkb21pbm9TaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygwLjEyNSwgMC4yNSwgMC4wNSkpOyAvLyDluYUwLjHjgIHpq5jjgZUx44CB5aWl6KGM44GNMC4144Gu5b2i54q2XG5cbi8vICAgICAgICAgY29uc3QgZG9taW5vQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDF9KTtcbi8vICAgICAgICAgLy8g5pyA5Yid44Gu44OJ44Of44OO44KS5bCR44GX5YCS44KM44GL44GR44KL44KI44GG44Gr6Kit5a6aXG4vLyBkb21pbm9zWzBdLnJvdGF0ZVgoICBNYXRoLlBJIC8gNik7IC8vIFRocmVlLmpz44Gu44OJ44Of44OO44KSMzDluqblgr7jgZHjgotcbiAgICBcbi8vICAgICBkb21pbm9Cb2R5LmFkZFNoYXBlKGRvbWlub1NoYXBlKTtcbi8vICAgICBkb21pbm9Cb2R5LnBvc2l0aW9uLnNldChkb21pbm8ucG9zaXRpb24ueCwgZG9taW5vLnBvc2l0aW9uLnksIGRvbWluby5wb3NpdGlvbi56KTtcbi8vICAgICBkb21pbm9Cb2R5LnF1YXRlcm5pb24uc2V0KGRvbWluby5xdWF0ZXJuaW9uLngsIGRvbWluby5xdWF0ZXJuaW9uLnksIGRvbWluby5xdWF0ZXJuaW9uLnosIGRvbWluby5xdWF0ZXJuaW9uLncpO1xuLy8gICAgIHdvcmxkLmFkZEJvZHkoZG9taW5vQm9keSk7XG4vLyAgICAgZG9taW5vQm9kaWVzLnB1c2goZG9taW5vQm9keSk7XG4vLyB9XG5cblxuLy8gd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDAuMTtcbi8vIHdvcmxkLmRlZmF1bHRDb250YWN0TWF0ZXJpYWwucmVzdGl0dXRpb24gPSAwO1xuLy8gICAgICAgICAvL+WcsOmdouOBrui/veWKoFxuLy8gICAgICAgICBjb25zdCBwaG9uZ01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCk7XG4vLyAgICAgICAgIGNvbnN0IHBsYW5lR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgyNSwgMjUpO1xuLy8gICAgICAgICBjb25zdCBwbGFuZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5LCBwaG9uZ01hdGVyaWFsKTtcbi8vICAgICAgICAgcGxhbmVNZXNoLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlOyAvLyDkuKHpnaJcbi8vICAgICAgICAgcGxhbmVNZXNoLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbi8vICAgICAgICAgdGhpcy5zY2VuZS5hZGQocGxhbmVNZXNoKTtcbi8vICAgICAgICAgY29uc3QgcGxhbmVTaGFwZSA9IG5ldyBDQU5OT04uUGxhbmUoKVxuLy8gICAgICAgICBjb25zdCBwbGFuZUJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwIH0pXG4vLyAgICAgICAgIHBsYW5lQm9keS5hZGRTaGFwZShwbGFuZVNoYXBlKVxuLy8gICAgICAgICBwbGFuZUJvZHkucG9zaXRpb24uc2V0KHBsYW5lTWVzaC5wb3NpdGlvbi54LCBwbGFuZU1lc2gucG9zaXRpb24ueSwgcGxhbmVNZXNoLnBvc2l0aW9uLnopO1xuLy8gICAgICAgICBwbGFuZUJvZHkucXVhdGVybmlvbi5zZXQocGxhbmVNZXNoLnF1YXRlcm5pb24ueCwgcGxhbmVNZXNoLnF1YXRlcm5pb24ueSwgcGxhbmVNZXNoLnF1YXRlcm5pb24ueiwgcGxhbmVNZXNoLnF1YXRlcm5pb24udyk7XG4vLyAgICAgICAgIHdvcmxkLmFkZEJvZHkocGxhbmVCb2R5KVxuXG5cbi8vICAgICAgICAgbGV0IHVwZGF0ZTogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuLy8gICAgICAgICAgICAgLy93b3JsZC5maXhlZFN0ZXAoKTtcbi8vICAgICAgICAgICAgIHdvcmxkLnN0ZXAoMSAvIDYwLCAyMCk7IC8vIOOCueODhuODg+ODl+aZgumWk+OCkjEvNjDnp5LjgIHlrp/ooYzmmYLplpPjgpIxLzEyMOenkuOBq+ioreWumuOBl+OBpuWAjemAn+WMllxuLy8gICAgICAgICAgICAgLy8gYm94XG4vLyAgICAgICAgICAgICAvLyBjdWJlLnBvc2l0aW9uLnNldChjdWJlQm9keS5wb3NpdGlvbi54LCBjdWJlQm9keS5wb3NpdGlvbi55LCBjdWJlQm9keS5wb3NpdGlvbi56KTtcbi8vICAgICAgICAgICAgIC8vIGN1YmUucXVhdGVybmlvbi5zZXQoY3ViZUJvZHkucXVhdGVybmlvbi54LCBjdWJlQm9keS5xdWF0ZXJuaW9uLnksIGN1YmVCb2R5LnF1YXRlcm5pb24ueiwgY3ViZUJvZHkucXVhdGVybmlvbi53KTtcblxuLy8gICAgICAgICAgICAgLy9kb21pbm9cbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9taW5vcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGRvbWlub3NbaV0ucG9zaXRpb24uc2V0KGRvbWlub0JvZGllc1tpXS5wb3NpdGlvbi54LCBkb21pbm9Cb2RpZXNbaV0ucG9zaXRpb24ueSwgZG9taW5vQm9kaWVzW2ldLnBvc2l0aW9uLnopO1xuLy8gICAgICAgICAgICAgICAgIGRvbWlub3NbaV0ucXVhdGVybmlvbi5zZXQoZG9taW5vQm9kaWVzW2ldLnF1YXRlcm5pb24ueCwgZG9taW5vQm9kaWVzW2ldLnF1YXRlcm5pb24ueSwgZG9taW5vQm9kaWVzW2ldLnF1YXRlcm5pb24ueiwgZG9taW5vQm9kaWVzW2ldLnF1YXRlcm5pb24udyk7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuLy8gICAgIH1cbiAgICBcbi8vIH1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXG4vLyBmdW5jdGlvbiBpbml0KCkge1xuLy8gICAgIGxldCBjb250YWluZXIgPSBuZXcgVGhyZWVKU0NvbnRhaW5lcigpO1xuXG4vLyAgICAgbGV0IHZpZXdwb3J0ID0gY29udGFpbmVyLmNyZWF0ZVJlbmRlcmVyRE9NKDY0MCwgNDgwLCBuZXcgVEhSRUUuVmVjdG9yMyg1LCA1LCA1KSk7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG4vLyB9XG5cbi8vIC8vIC8vIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vMjJGSTAwNCDpmL/pg6gg5piO5pel5qi55Lul5LiL44Gv56ysMTHlm54gIDExLTIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG4vLyBpbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbi8vIGNsYXNzIFRocmVlSlNDb250YWluZXIge1xuLy8gICAgIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xuLy8gICAgIHByaXZhdGUgbGlnaHQ6IFRIUkVFLkxpZ2h0O1xuXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG5cbi8vICAgICB9XG5cbi8vICAgICAvLyDnlLvpnaLpg6jliIbjga7kvZzmiJAo6KGo56S644GZ44KL5p6g44GU44Go44GrKSpcbi8vICAgICBwdWJsaWMgY3JlYXRlUmVuZGVyZXJET00gPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbWVyYVBvczogVEhSRUUuVmVjdG9yMykgPT4ge1xuLy8gICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4vLyAgICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4vLyAgICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4NDk1ZWQpKTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlOyAvL+OCt+ODo+ODieOCpuODnuODg+ODl+OCkuacieWKueOBq+OBmeOCi1xuXG4vLyAgICAgICAgIC8v44Kr44Oh44Op44Gu6Kit5a6aXG4vLyAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4vLyAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4vLyAgICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4vLyAgICAgICAgIGNvbnN0IG9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4vLyAgICAgICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbi8vICAgICAgICAgLy8g5q+O44OV44Os44O844Og44GudXBkYXRl44KS5ZG844KT44Gn77yMcmVuZGVyXG4vLyAgICAgICAgIC8vIHJlcWVzdEFuaW1hdGlvbkZyYW1lIOOBq+OCiOOCiuasoeODleODrOODvOODoOOCkuWRvOOBtlxuLy8gICAgICAgICBjb25zdCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbi8vICAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbi8vICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuLy8gICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbi8vICAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuLy8gICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuLy8gICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbi8vICAgICB9XG5cbi8vICAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbi8vICAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuLy8gICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIFxuLy8gICAgICAgICAvLyDjg6Hjg4Pjgrfjg6Xjga7nlJ/miJBcbi8vICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KDAuMjUsIDEpO1xuLy8gICAgICAgICBjb25zdCByZWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweEZGMDAwMCB9KTtcbi8vICAgICAgICAgY29uc3QgZ3JlZW5NYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwRkYwMCB9KTtcbi8vICAgICAgICAgY29uc3QgYmx1ZU1hdGVyaWFsID0gIG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBGRiB9KTtcbi8vICAgICAgICAgY29uc3QgcmVkQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCByZWRNYXRlcmlhbCk7XG4vLyAgICAgICAgIGNvbnN0IGdyZWVuQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBncmVlbk1hdGVyaWFsKTtcbi8vICAgICAgICAgY29uc3QgYmx1ZUNvbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgYmx1ZU1hdGVyaWFsKTtcblxuLy8gICAgICAgICAvL+ODouODh+ODq+OBruW6p+aomeenu+WLlVxuLy8gICAgICAgICByZWRDb25lLnRyYW5zbGF0ZVgoMC41KTtcbi8vICAgICAgICAgcmVkQ29uZS5yb3RhdGVaKC1NYXRoLlBJIC8gMik7XG4vLyAgICAgICAgIGdyZWVuQ29uZS50cmFuc2xhdGVZKDAuNSk7XG4vLyAgICAgICAgIGJsdWVDb25lLnRyYW5zbGF0ZVooMC41KTtcbi8vICAgICAgICAgYmx1ZUNvbmUucm90YXRlWChNYXRoLlBJIC8gMik7XG5cbi8vICAgICAgICAgLy/jgrDjg6vjg7zjg5fjgavjgZfjgabkuIDjgaTjga7jgqrjg5bjgrjjgqfjgq/jg4jjgajjgZfjgabmibHjgYZcbi8vICAgICAgICAgY29uc3Qgb2JqIDogVEhSRUUuR3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbi8vICAgICAgICAgb2JqLmFkZChyZWRDb25lKTtcbi8vICAgICAgICAgb2JqLmFkZChncmVlbkNvbmUpO1xuLy8gICAgICAgICBvYmouYWRkKGJsdWVDb25lKTtcbi8vICAgICAgICAgdGhpcy5zY2VuZS5hZGQob2JqKTtcblxuLy8gICAgICAgICAvLyDjgrDjg6rjg4Pjg4nooajnpLpcbi8vICAgICAgICAgY29uc3QgZ3JpZEhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKCAxMCwpO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZCggZ3JpZEhlbHBlciApOyAgXG5cbi8vICAgICAgICAgLy8g6Lu46KGo56S6XG4vLyAgICAgICAgIGNvbnN0IGF4ZXNIZWxwZXIgPSBuZXcgVEhSRUUuQXhlc0hlbHBlciggNSApO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZCggYXhlc0hlbHBlciApO1xuXG4vLyAgICAgICAgIC8vIOe3muW9ouijnOmWk+OBrumWouaVsFxuLy8gICAgICAgICBsZXQgbGVycCA9IChwMDogVEhSRUUuVmVjdG9yMywgcDE6IFRIUkVFLlZlY3RvcjMsIHQ6IG51bWJlcikgOiAoVEhSRUUuVmVjdG9yMykgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKDEuMCAtIHQpICogcDAueCArIHQgKiBwMS54LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDEuMCAtIHQpICogcDAueSArIHQgKiBwMS55LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDEuMCAtIHQpICogcDAueiArIHQgKiBwMS56KTtcbi8vICAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gcDAubXVsdGlwbHlTY2FsYXIoKDEuMCAtIHQpKS5hZGQocDEubXVsdGlwbHlTY2FsYXIoKHQpKSk7XG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgbGV0IGJlemllciA9IChwMDogVEhSRUUuVmVjdG9yMywgcDE6IFRIUkVFLlZlY3RvcjMsIFxuLy8gICAgICAgICAgICAgcDI6IFRIUkVFLlZlY3RvcjMsIHAzOiBUSFJFRS5WZWN0b3IzLCB0OiBudW1iZXIpIDogKFRIUkVFLlZlY3RvcjMpID0+IHtcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKDEuMCAtIHQpICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogcDAueCArIDMgKiB0ICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogcDEueCArIDMgKiB0ICogdCAqICgxLjAgLSB0KSAqIHAyLnggKyB0ICogdCAqIHQgKiBwMy54LFxuLy8gICAgICAgICAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiBwMC55ICsgMyAqIHQgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiBwMS55ICsgMyAqIHQgKiB0ICogKDEuMCAtIHQpICogcDIueSArIHQgKiB0ICogdCAqIHAzLnksXG4vLyAgICAgICAgICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHAwLnogKyAzICogdCAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHAxLnogKyAzICogdCAqIHQgKiAoMS4wIC0gdCkgKiBwMi56ICsgdCAqIHQgKiB0ICogcDMueik7Ly9CZXppZXLmm7Lnt5rjgpLlrp/oo4XjgZnjgotcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgICAgICAgfVxuXG4vLyBsZXQgaGVybWl0ZSA9IChwMDogVEhSRUUuVmVjdG9yMywgdjA6IFRIUkVFLlZlY3RvcjMsIFxuLy8gICAgIHAxOiBUSFJFRS5WZWN0b3IzLCB2MTogVEhSRUUuVmVjdG9yMywgdDogbnVtYmVyKSA6IChUSFJFRS5WZWN0b3IzKSA9PiB7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKDIuMCAqIHQgKyAxLjApICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogcDAueCArIHQgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiB2MC54ICsgdCAqIHQgKiAoMy4wIC0gMiAqIHQpICogcDEueCAtIHQgKiB0ICogKDEuMCAtIHQpICogdjEueCxcbi8vICAgICAoMi4wICogdCArIDEuMCkgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiBwMC55ICsgdCAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHYwLnkgKyB0ICogdCAqICgzLjAgLSAyICogdCkgKiBwMS55IC0gdCAqIHQgKiAoMS4wIC0gdCkgKiB2MS55LFxuLy8gICAgICgyLjAgKiB0ICsgMS4wKSAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHAwLnogKyB0ICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogdjAueiArIHQgKiB0ICogKDMuMCAtIDIgKiB0KSAqIHAxLnogLSB0ICogdCAqICgxLjAgLSB0KSAqIHYxLnopOy8v44Ko44Or44Of44O844OI5puy57ea44KS5a6f6KOF44GZ44KLXG4vLyAgICAgcmV0dXJuIHJlc3VsdDsgICBcbi8vICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIFxuLy8gICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxuLy8gICAgICAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuLy8gICAgICAgICBjb25zdCBsdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkubm9ybWFsaXplKCk7XG4vLyAgICAgICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KGx2ZWMueCwgbHZlYy55LCBsdmVjLnopO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcbiAgICBcblxuLy8gICAgICAgICBjb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuLy8gICAgICAgICBsZXQgdCA9IDA7XG4vLyAgICAgICAgIGxldCBzZWcgPSAwO1xuXG4vLyAgICAgICAgIGxldCBwb2ludHMgOiBUSFJFRS5WZWN0b3IzW10gPSBbXVxuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNCwgMCwgMCkpOyAgIOikh+aVsOOBrmJ1emllclxuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtMywgMCwgMykpO1xuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMykpO1xuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG5cbi8vICAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNCwgMCwgLTIpKTtcbi8vICAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoNCwgMCwgLTQpKTtcbi8vICAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoNCwgMCwgLTIpKTtcblxuXG4vLyAgICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDIpKTtcbi8vICAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgOCkpO1xuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygyLCAwLCAyKSk7XG4vLyAgICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC04KSk7XG5cblxuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtNCkpO1xuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG4vLyAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDIpKTtcbi8vICAgICAgICAgcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgOCkpO1xuXG4vLyAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDIpKTtcbi8vICAgICAgICAgcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgOCkpO1xuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygyLCAwLCAyKSk7XG4vLyAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC04KSk7XG5cbi8vICAgICAgICAgcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMiwgMCwgMikpO1xuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtOCkpO1xuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAyLCAwKSk7XG4vLyAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC00LCAwLCAwKSk7XG5cbi8vICAgICAgICAgcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMiwgMCkpO1xuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNCwgMCwgMCkpO1xuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNCwgMiwgMCkpO1xuLy8gICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCA0LCAwKSk7XG5cblxuLy8gICAgICAgICBsZXQgdXBkYXRlOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4vLyAgICAgICAgICAgICB0ICs9IGNsb2NrLmdldERlbHRhKCk7XG4vLyAgICAgICAgICAgICBpZih0ID4gMS4wKSB7XG4vLyAgICAgICAgICAgICAgICAgdCAtPSAxLjA7XG4vLyAgICAgICAgICAgICAgICAgc2VnID0gKHNlZyArIDEpICUgNDtcbi8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy9jb25zdCBwb3MgPSBsZXJwKHBvaW50c1swXSwgcG9pbnRzWzFdLCB0KTtcbi8vICAgICAgICAgICAgIC8vY29uc3QgcG9zID0gYmV6aWVyKHBvaW50c1swXSwgcG9pbnRzWzFdLHBvaW50c1syXSxwb2ludHNbM10sIHQpO1xuXG4vLyAgICAgICAgICAgICAvL2NvbnN0IHBvcyA9IGJlemllcihwb2ludHNbc2VnICogNCArIDBdLCBwb2ludHNbc2VnICogNCArIDFdLCBwb2ludHNbc2VnICogNCArIDJdLCBwb2ludHNbc2VnICogNCArIDNdLCB0KTtcbi8vICAgICAgICAgICAgLy8gY29uc3QgcG9zID0gaGVybWl0ZShwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10sIHQpO1xuLy8gICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGhlcm1pdGUocG9pbnRzW3NlZyAqIDQgKyAwXSwgcG9pbnRzW3NlZyAqIDQgKyAxXSwgcG9pbnRzW3NlZyAqIDQgKyAyXSwgcG9pbnRzW3NlZyAqIDQgKyAzXSwgdCk7XG4vLyAgICAgICAgICAgICAgb2JqLmxvb2tBdChwb3MpO1xuLy8gICAgICAgICAgICAgb2JqLnBvc2l0aW9uLmNvcHkocG9zKTtcbiAgICAgICAgXG4vLyAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbi8vICAgICB9XG4gICAgXG4vLyB9XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuLy8gZnVuY3Rpb24gaW5pdCgpIHtcbi8vICAgICBsZXQgY29udGFpbmVyID0gbmV3IFRocmVlSlNDb250YWluZXIoKTtcblxuLy8gICAgIGxldCB2aWV3cG9ydCA9IGNvbnRhaW5lci5jcmVhdGVSZW5kZXJlckRPTSg2NDAsIDQ4MCwgbmV3IFRIUkVFLlZlY3RvcjMoNSwgNywgNSkpO1xuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xuLy8gfVxuLy8gLy8gLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8yMkZJMDA0IOmYv+mDqCDmmI7ml6XmqLnku6XkuIvjga/nrKwxMeWbniAgMTEtMS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbi8vIGltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcblxuLy8gY2xhc3MgVGhyZWVKU0NvbnRhaW5lciB7XG4vLyAgICAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XG4vLyAgICAgcHJpdmF0ZSBsaWdodDogVEhSRUUuTGlnaHQ7XG5cbi8vICAgICBjb25zdHJ1Y3RvcigpIHtcblxuLy8gICAgIH1cblxuLy8gICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspKlxuLy8gICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuLy8gICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7IC8v44K344Oj44OJ44Km44Oe44OD44OX44KS5pyJ5Yq544Gr44GZ44KLXG5cbi8vICAgICAgICAgLy/jgqvjg6Hjg6njga7oqK3lrppcbi8vICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aWR0aCAvIGhlaWdodCwgMC4xLCAxMDAwKTtcbi8vICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zKTtcbi8vICAgICAgICAgY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG5cbi8vICAgICAgICAgY29uc3Qgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbi8vICAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuLy8gICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIxyZW5kZXJcbi8vICAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4vLyAgICAgICAgIGNvbnN0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuLy8gICAgICAgICAgICAgb3JiaXRDb250cm9scy51cGRhdGUoKTtcblxuLy8gICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XG4vLyAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuLy8gICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4vLyAgICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4vLyAgICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuLy8gICAgIH1cblxuLy8gICAgIC8vIOOCt+ODvOODs+OBruS9nOaIkCjlhajkvZPjgacx5ZueKVxuLy8gICAgIHByaXZhdGUgY3JlYXRlU2NlbmUgPSAoKSA9PiB7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgXG4vLyAgICAgICAgIC8vIOODoeODg+OCt+ODpeOBrueUn+aIkFxuLy8gICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoMC4yNSwgMSk7XG4vLyAgICAgICAgIGNvbnN0IHJlZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4RkYwMDAwIH0pO1xuLy8gICAgICAgICBjb25zdCBncmVlbk1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDBGRjAwIH0pO1xuLy8gICAgICAgICBjb25zdCBibHVlTWF0ZXJpYWwgPSAgbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMEZGIH0pO1xuLy8gICAgICAgICBjb25zdCByZWRDb25lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIHJlZE1hdGVyaWFsKTtcbi8vICAgICAgICAgY29uc3QgZ3JlZW5Db25lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIGdyZWVuTWF0ZXJpYWwpO1xuLy8gICAgICAgICBjb25zdCBibHVlQ29uZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBibHVlTWF0ZXJpYWwpO1xuXG4vLyAgICAgICAgIC8v44Oi44OH44Or44Gu5bqn5qiZ56e75YuVXG4vLyAgICAgICAgIHJlZENvbmUudHJhbnNsYXRlWCgwLjUpO1xuLy8gICAgICAgICByZWRDb25lLnJvdGF0ZVooLU1hdGguUEkgLyAyKTtcbi8vICAgICAgICAgZ3JlZW5Db25lLnRyYW5zbGF0ZVkoMC41KTtcbi8vICAgICAgICAgYmx1ZUNvbmUudHJhbnNsYXRlWigwLjUpO1xuLy8gICAgICAgICBibHVlQ29uZS5yb3RhdGVYKE1hdGguUEkgLyAyKTtcblxuLy8gICAgICAgICAvL+OCsOODq+ODvOODl+OBq+OBl+OBpuS4gOOBpOOBruOCquODluOCuOOCp+OCr+ODiOOBqOOBl+OBpuaJseOBhlxuLy8gICAgICAgICBjb25zdCBvYmogOiBUSFJFRS5Hcm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuLy8gICAgICAgICBvYmouYWRkKHJlZENvbmUpO1xuLy8gICAgICAgICBvYmouYWRkKGdyZWVuQ29uZSk7XG4vLyAgICAgICAgIG9iai5hZGQoYmx1ZUNvbmUpO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuXG4vLyAgICAgICAgIC8vIOOCsOODquODg+ODieihqOekulxuLy8gICAgICAgICBjb25zdCBncmlkSGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoIDEwLCk7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKCBncmlkSGVscGVyICk7ICBcblxuLy8gICAgICAgICAvLyDou7jooajnpLpcbi8vICAgICAgICAgY29uc3QgYXhlc0hlbHBlciA9IG5ldyBUSFJFRS5BeGVzSGVscGVyKCA1ICk7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKCBheGVzSGVscGVyICk7XG5cbi8vICAgICAgICAgLy8g57ea5b2i6KOc6ZaT44Gu6Zai5pWwXG4vLyAgICAgICAgIGxldCBsZXJwID0gKHAwOiBUSFJFRS5WZWN0b3IzLCBwMTogVEhSRUUuVmVjdG9yMywgdDogbnVtYmVyKSA6IChUSFJFRS5WZWN0b3IzKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEhSRUUuVmVjdG9yMygoMS4wIC0gdCkgKiBwMC54ICsgdCAqIHAxLngsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMS4wIC0gdCkgKiBwMC55ICsgdCAqIHAxLnksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMS4wIC0gdCkgKiBwMC56ICsgdCAqIHAxLnopO1xuLy8gICAgICAgICAgICAgLy9jb25zdCByZXN1bHQgPSBwMC5tdWx0aXBseVNjYWxhcigoMS4wIC0gdCkpLmFkZChwMS5tdWx0aXBseVNjYWxhcigodCkpKTtcbi8vICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgYmV6aWVyID0gKHAwOiBUSFJFRS5WZWN0b3IzLCBwMTogVEhSRUUuVmVjdG9yMywgXG4vLyAgICAgICAgICAgICBwMjogVEhSRUUuVmVjdG9yMywgcDM6IFRIUkVFLlZlY3RvcjMsIHQ6IG51bWJlcikgOiAoVEhSRUUuVmVjdG9yMykgPT4ge1xuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEhSRUUuVmVjdG9yMygoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiBwMC54ICsgMyAqIHQgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiBwMS54ICsgMyAqIHQgKiB0ICogKDEuMCAtIHQpICogcDIueCArIHQgKiB0ICogdCAqIHAzLngsXG4vLyAgICAgICAgICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHAwLnkgKyAzICogdCAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHAxLnkgKyAzICogdCAqIHQgKiAoMS4wIC0gdCkgKiBwMi55ICsgdCAqIHQgKiB0ICogcDMueSxcbi8vICAgICAgICAgKDEuMCAtIHQpICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogcDAueiArIDMgKiB0ICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogcDEueiArIDMgKiB0ICogdCAqICgxLjAgLSB0KSAqIHAyLnogKyB0ICogdCAqIHQgKiBwMy56KTsvL0Jlemllcuabsue3muOCkuWun+ijheOBmeOCi1xuLy8gICAgICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICAgICAgICB9XG5cbi8vIGxldCBoZXJtaXRlID0gKHAwOiBUSFJFRS5WZWN0b3IzLCB2MDogVEhSRUUuVmVjdG9yMywgXG4vLyAgICAgcDE6IFRIUkVFLlZlY3RvcjMsIHYxOiBUSFJFRS5WZWN0b3IzLCB0OiBudW1iZXIpIDogKFRIUkVFLlZlY3RvcjMpID0+IHtcbi8vICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEhSRUUuVmVjdG9yMygoMi4wICogdCArIDEuMCkgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiBwMC54ICsgdCAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHYwLnggKyB0ICogdCAqICgzLjAgLSAyICogdCkgKiBwMS54IC0gdCAqIHQgKiAoMS4wIC0gdCkgKiB2MS54LFxuLy8gICAgICgyLjAgKiB0ICsgMS4wKSAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqIHAwLnkgKyB0ICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogdjAueSArIHQgKiB0ICogKDMuMCAtIDIgKiB0KSAqIHAxLnkgLSB0ICogdCAqICgxLjAgLSB0KSAqIHYxLnksXG4vLyAgICAgKDIuMCAqIHQgKyAxLjApICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogcDAueiArIHQgKiAoMS4wIC0gdCkgKiAoMS4wIC0gdCkgKiB2MC56ICsgdCAqIHQgKiAoMy4wIC0gMiAqIHQpICogcDEueiAtIHQgKiB0ICogKDEuMCAtIHQpICogdjEueik7Ly/jgqjjg6vjg5/jg7zjg4jmm7Lnt5rjgpLlrp/oo4XjgZnjgotcbi8vICAgICByZXR1cm4gcmVzdWx0OyAgIFxuLy8gICAgIH1cblxuICAgICAgICBcbiAgICAgICAgXG4vLyAgICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4vLyAgICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4vLyAgICAgICAgIGNvbnN0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbi8vICAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuICAgIFxuXG4vLyAgICAgICAgIGNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4vLyAgICAgICAgIGxldCB0ID0gMDtcbi8vICAgICAgICAgbGV0IHNlZyA9IDA7XG5cbi8vICAgICAgICAgbGV0IHBvaW50cyA6IFRIUkVFLlZlY3RvcjNbXSA9IFtdXG4vLyAgICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC00LCAwLCAwKSk7ICAg6KSH5pWw44GuYnV6aWVyXG4vLyAgICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC0zLCAwLCAzKSk7XG4vLyAgICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAzKSk7XG4vLyAgICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG4vLyAgICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC00LCAwLCAtMikpO1xuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyg0LCAwLCAtNCkpO1xuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyg0LCAwLCAtMikpO1xuLy8gICAgICAgICAvL3BvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC04KSk7XG5cblxuLy8gICAgICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtNCkpO1xuICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG4gICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDIpKTtcbiAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgOCkpO1xuXG4gICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDIpKTtcbiAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgOCkpO1xuICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygyLCAwLCAyKSk7XG4gICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC04KSk7XG5cbiAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMiwgMCwgMikpO1xuICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtOCkpO1xuICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAyLCAwKSk7XG4gICAgICAgIC8vIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKC00LCAwLCAwKSk7XG5cbiAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMiwgMCkpO1xuICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNCwgMCwgMCkpO1xuICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNCwgMiwgMCkpO1xuICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCA0LCAwKSk7XG5cblxuLy8gICAgICAgICBsZXQgdXBkYXRlOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4vLyAgICAgICAgICAgICB0ICs9IGNsb2NrLmdldERlbHRhKCk7XG4vLyAgICAgICAgICAgICBpZih0ID4gMS4wKSB7XG4vLyAgICAgICAgICAgICAgICAgdCAtPSAxLjA7XG4vLyAgICAgICAgICAgICAgICAgc2VnID0gKHNlZyArIDEpICUgNDtcbi8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy9jb25zdCBwb3MgPSBsZXJwKHBvaW50c1swXSwgcG9pbnRzWzFdLCB0KTtcbi8vICAgICAgICAgICAgIC8vY29uc3QgcG9zID0gYmV6aWVyKHBvaW50c1swXSwgcG9pbnRzWzFdLHBvaW50c1syXSxwb2ludHNbM10sIHQpO1xuXG4vLyAgICAgICAgICAgICAvL2NvbnN0IHBvcyA9IGJlemllcihwb2ludHNbc2VnICogNCArIDBdLCBwb2ludHNbc2VnICogNCArIDFdLCBwb2ludHNbc2VnICogNCArIDJdLCBwb2ludHNbc2VnICogNCArIDNdLCB0KTtcbi8vICAgICAgICAgICAgIC8vY29uc3QgcG9zID0gaGVybWl0ZShwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10sIHQpO1xuLy8gICAgICAgICAgICAgY29uc3QgcG9zID0gaGVybWl0ZShwb2ludHNbc2VnICogNCArIDBdLCBwb2ludHNbc2VnICogNCArIDFdLCBwb2ludHNbc2VnICogNCArIDJdLCBwb2ludHNbc2VnICogNCArIDNdLCB0KTtcbi8vICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5jb3B5KHBvcyk7XG4gICAgICAgIFxuLy8gICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgfVxuICAgIFxuLy8gfVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbi8vIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbi8vICAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDUsIDcsIDUpKTtcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbi8vIH1cblxuLy8gLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8yMkZJMDA0IOmYv+mDqCDmmI7ml6XmqLnku6XkuIvjga/nrKw55ZueICAgOS0yLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuLy8gaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuXG4vLyBjbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbi8vICAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbi8vICAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcblxuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuXG4vLyAgICAgfVxuXG4vLyAgICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4vLyAgICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbi8vICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuLy8gICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuLy8gICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweDQ5NWVkKSk7XG4vLyAgICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTsgLy/jgrfjg6Pjg4njgqbjg57jg4Pjg5fjgpLmnInlirnjgavjgZnjgotcblxuLy8gICAgICAgICAvL+OCq+ODoeODqeOBruioreWumlxuLy8gICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuLy8gICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuLy8gICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuLy8gICAgICAgICBjb25zdCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuLy8gICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4vLyAgICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxuLy8gICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbi8vICAgICAgICAgY29uc3QgcmVuZGVyOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4vLyAgICAgICAgICAgICBvcmJpdENvbnRyb2xzLnVwZGF0ZSgpO1xuXG4vLyAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgY2FtZXJhKTtcbi8vICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG4vLyAgICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuY3NzRmxvYXQgPSBcImxlZnRcIjtcbi8vICAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbi8vICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8g44K344O844Oz44Gu5L2c5oiQKOWFqOS9k+OBpzHlm54pXG4vLyAgICAgcHJpdmF0ZSBjcmVhdGVTY2VuZSA9ICgpID0+IHtcbi8vICAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG5cbi8vIGxldCBhZGRTY2VuZUZyb21PYmpGaWxlID0gYXN5bmMgKGZpbGVQYXRoOiBzdHJpbmcpID0+IHsgIFxuLy8gICAgIGNvbnN0IG1lc2hTdHIgPSBhd2FpdCByZWFkRmlsZShmaWxlUGF0aCk7XG5cbi8vICAgICBsZXQgdmVydGljZXMgOm51bWJlcltdID0gW107XG4vLyAgICAgbGV0IHZlcnRleEluZGljZXMgOm51bWJlcltdID0gW107XG4vLyAgICAgbGV0IG1hdGVyaWFsTmFtZTogc3RyaW5nID0gXCJcIjtcblxuLy8gICAgIGNvbnN0IG1lc2hMaW5lcyA9IG1lc2hTdHIuc3BsaXQoXCJcXG5cIik7XG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1lc2hMaW5lcy5sZW5ndGg7ICsraSkge1xuLy8gICAgICAgICBjb25zdCBtZXNoTGluZSA9IG1lc2hMaW5lc1tpXTtcbi8vICAgICAgICAgY29uc3QgbWVzaFNwYWNlU3BsaXRBcnJheSA9IG1lc2hMaW5lLnNwbGl0KFwiIFwiKTtcblxuLy8gICAgICAgICBjb25zdCBtZXNoVHlwZSA9IG1lc2hTcGFjZVNwbGl0QXJyYXlbMF07IC8v44Gp44Gu5oOF5aCx44KS6KGo44GZ44GLXG4vLyAgICAgICAgIGlmKG1lc2hUeXBlID09IFwidlwiKSB7IC8v6aCC54K5XG4vLyAgICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQobWVzaFNwYWNlU3BsaXRBcnJheVsxXSkpOyAvL3jluqfmqJlcbi8vICAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdChtZXNoU3BhY2VTcGxpdEFycmF5WzJdKSk7IC8veeW6p+aomVxuLy8gICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KG1lc2hTcGFjZVNwbGl0QXJyYXlbM10pKTsgLy965bqn5qiZXG4vLyAgICAgICAgIH0gZWxzZSBpZiAobWVzaFR5cGUgPT0gXCJmXCIpIHsgLy/pnaLjga7mg4XloLFcbi8vICAgICAgICAgICAgIGNvbnN0IGYxID0gbWVzaFNwYWNlU3BsaXRBcnJheVsxXS5zcGxpdChcIi9cIik7XG4vLyAgICAgICAgICAgICBjb25zdCBmMiA9IG1lc2hTcGFjZVNwbGl0QXJyYXlbMl0uc3BsaXQoXCIvXCIpO1xuLy8gICAgICAgICAgICAgY29uc3QgZjMgPSBtZXNoU3BhY2VTcGxpdEFycmF5WzNdLnNwbGl0KFwiL1wiKTtcbi8vICAgICAgICAgICAgIHZlcnRleEluZGljZXMucHVzaChwYXJzZUludChmMVswXSkgLSAxKTsgLy/poILngrnjgqTjg7Pjg4fjg4Pjgq/jgrlcbi8vICAgICAgICAgICAgIHZlcnRleEluZGljZXMucHVzaChwYXJzZUludChmMlswXSkgLSAxKTsgLy/poILngrnjgqTjg7Pjg4fjg4Pjgq/jgrlcbi8vICAgICAgICAgICAgIHZlcnRleEluZGljZXMucHVzaChwYXJzZUludChmM1swXSkgLSAxKTsgLy/poILngrnjgqTjg7Pjg4fjg4Pjgq/jgrlcbi8vICAgICAgICAgfSBlbHNlIGlmIChtZXNoVHlwZSA9PSBcIm10bGxpYlwiKSB7XG4vLyAgICAgICAgICAgICBtYXRlcmlhbE5hbWUgPSBtZXNoU3BhY2VTcGxpdEFycmF5WzFdOyAvLyBNYXRlcmlhbCBmaWxlIG5hbWVcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4vLyAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCAncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgMyApICk7XG4vLyAgICAgZ2VvbWV0cnkuc2V0SW5kZXgodmVydGV4SW5kaWNlcyk7XG4vLyAgICAgZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcblxuLy8gICAgIGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgpO1xuLy8gICAgIGlmIChtYXRlcmlhbE5hbWUpIHtcbi8vICAgICAgICAgY29uc3QgbWF0ZXJpYWxTdHIgPSBhd2FpdCByZWFkRmlsZShtYXRlcmlhbE5hbWUpO1xuLy8gICAgICAgICBjb25zdCBtYXRlcmlhbExpbmVzID0gbWF0ZXJpYWxTdHIuc3BsaXQoXCJcXG5cIik7XG4vLyAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXRlcmlhbExpbmVzLmxlbmd0aDsgKytpKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbExpbmUgPSBtYXRlcmlhbExpbmVzW2ldO1xuLy8gICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxTcGFjZVNwbGl0QXJyYXkgPSBtYXRlcmlhbExpbmUuc3BsaXQoXCIgXCIpO1xuXG4vLyAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbFR5cGUgPSBtYXRlcmlhbFNwYWNlU3BsaXRBcnJheVswXTsgLy/jganjga7mg4XloLHjgpLooajjgZnjgYtcbi8vICAgICAgICAgICAgIGlmKG1hdGVyaWFsVHlwZSA9PSBcIktkXCIpIHsgLy8gRGlmZnVzZSBjb2xvclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKFxuLy8gICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KG1hdGVyaWFsU3BhY2VTcGxpdEFycmF5WzFdKSwgXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQobWF0ZXJpYWxTcGFjZVNwbGl0QXJyYXlbMl0pLCBcbi8vICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChtYXRlcmlhbFNwYWNlU3BsaXRBcnJheVszXSlcbi8vICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IGNvbG9yIH0pO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcbi8vICAgICB0aGlzLnNjZW5lLmFkZChtZXNoKTtcbi8vIH1cblxuLy8gLy8gVXNlIHRoZSB1cGRhdGVkIGZ1bmN0aW9uXG4vLyBhZGRTY2VuZUZyb21PYmpGaWxlKFwidHJpX21hdC5vYmpcIik7XG5cblxuLy8gICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxuLy8gICAgICAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuLy8gICAgICAgICBjb25zdCBsdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkubm9ybWFsaXplKCk7XG4vLyAgICAgICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KGx2ZWMueCwgbHZlYy55LCBsdmVjLnopO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcbiAgICBcbi8vICAgICAgICAgLy8g5q+O44OV44Os44O844Og44GudXBkYXRl44KS5ZG844KT44Gn77yM5pu05pawXG4vLyAgICAgICAgIC8vIHJlcWVzdEFuaW1hdGlvbkZyYW1lIOOBq+OCiOOCiuasoeODleODrOODvOODoOOCkuWRvOOBtlxuLy8gICAgICAgICBsZXQgdXBkYXRlOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG5cbi8vICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuLy8gICAgIH1cbiAgICBcbi8vIH1cblxuLy8gYXN5bmMgZnVuY3Rpb24gcmVhZEZpbGUocGF0aCk6IFByb21pc2U8c3RyaW5nPiB7XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlID0+IHtcbi8vICAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLkZpbGVMb2FkZXIoKTtcbi8vICAgICAgICAgbG9hZGVyLmxvYWQocGF0aCwgKGRhdGEpID0+IHtcbi8vICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRTdHJpbmcgPSBkZWNvZGVyLmRlY29kZShkYXRhKTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkZWNvZGVkU3RyaW5nKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICApO1xuLy8gICAgIH0pKTtcbi8vIH1cblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbi8vIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbi8vICAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDMpKTtcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbi8vIH1cblxuXG5cbi8vIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vMjJGSTAwNCDpmL/pg6gg5piO5pel5qi55Lul5LiL44Gv56ysOeWbniAgIDktMS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbi8vIGltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcblxuLy8gY2xhc3MgVGhyZWVKU0NvbnRhaW5lciB7XG4vLyAgICAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XG4vLyAgICAgcHJpdmF0ZSBsaWdodDogVEhSRUUuTGlnaHQ7XG5cbi8vICAgICBjb25zdHJ1Y3RvcigpIHtcblxuLy8gICAgIH1cblxuLy8gICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspKlxuLy8gICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuLy8gICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7IC8v44K344Oj44OJ44Km44Oe44OD44OX44KS5pyJ5Yq544Gr44GZ44KLXG5cbi8vICAgICAgICAgLy/jgqvjg6Hjg6njga7oqK3lrppcbi8vICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aWR0aCAvIGhlaWdodCwgMC4xLCAxMDAwKTtcbi8vICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zKTtcbi8vICAgICAgICAgY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG5cbi8vICAgICAgICAgY29uc3Qgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbi8vICAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuLy8gICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIxyZW5kZXJcbi8vICAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4vLyAgICAgICAgIGNvbnN0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuLy8gICAgICAgICAgICAgb3JiaXRDb250cm9scy51cGRhdGUoKTtcblxuLy8gICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XG4vLyAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuLy8gICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4vLyAgICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4vLyAgICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuLy8gICAgIH1cblxuLy8gICAgIC8vIOOCt+ODvOODs+OBruS9nOaIkCjlhajkvZPjgacx5ZueKVxuLy8gICAgIHByaXZhdGUgY3JlYXRlU2NlbmUgPSAoKSA9PiB7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuLy8gICAgICAgICAvLyAvLyDpoILngrnluqfmqJnjga7lrprnvqlcbi8vICAgICAgICAgLy8gY29uc3QgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcbi8vICAgICAgICAgLy8gICAgIDAsICAxLCAwLCAvLzHjgaTnm67jga7poILngrnluqfmqJlcbi8vICAgICAgICAgLy8gICAgIC0xLCAgLTEsIDAsIC8vMuOBpOebruOBrumggueCueW6p+aomVxuLy8gICAgICAgICAvLyAgICAgMSwgLTEsIDAsIC8vM+OBpOebruOBrumggueCueW6p+aomVxuLy8gICAgICAgICAvLyBdKTtcbi8vIC8vIC8v6aCC54K55bqn5qiZXG4vLyAvLyBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuLy8gLy8gICAgIDAsICAxLCAwLCAvLzHjgaTnm67jga7poILngrnluqfmqJlcbi8vIC8vICAgICAtMSwgIC0xLCAwLCAvLzLjgaTnm67jga7poILngrnluqfmqJlcbi8vIC8vICAgICAxLCAtMSwgMCwgLy8z44Gk55uu44Gu6aCC54K55bqn5qiZXG4vLyAvLyBdKTtcbi8vIC8vIC8vIOmggueCueOCpOODs+ODh+ODg+OCr+OCuVxuLy8gLy8gY29uc3QgaW5kaWNlcyA9IFsgXG4vLyAvLyAgICAgMCwgMSwgMlxuLy8gLy8gXTtcblxuLy8gLy8gbGV0IGNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuLy8gLy8gICAgIDEuMCwgMC4wLCAwLjAsIC8v6LWkXG4vLyAvLyAgICAgMC4wLCAxLjAsIDAuMCwgLy/nt5Fcbi8vIC8vICAgICAwLjAsIDAuMCwgMS4wIC8v6Z2SXG4vLyAvLyBdKTtcblxuLy8gLy8g6aCC54K55bqn5qiZXG4vLyBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuLy8gICAgIC0xLCAtMSwgIDEsIC8vIDA6IOW3puS4i+WJjVxuLy8gICAgICAxLCAtMSwgIDEsIC8vIDE6IOWPs+S4i+WJjVxuLy8gICAgICAxLCAgMSwgIDEsIC8vIDI6IOWPs+S4iuWJjVxuLy8gICAgIC0xLCAgMSwgIDEsIC8vIDM6IOW3puS4iuWJjVxuLy8gICAgIC0xLCAtMSwgLTEsIC8vIDQ6IOW3puS4i+W+jFxuLy8gICAgICAxLCAtMSwgLTEsIC8vIDU6IOWPs+S4i+W+jFxuLy8gICAgICAxLCAgMSwgLTEsIC8vIDY6IOWPs+S4iuW+jFxuLy8gICAgIC0xLCAgMSwgLTEgIC8vIDc6IOW3puS4iuW+jFxuLy8gXSk7XG5cbi8vIC8vIOmggueCueOCpOODs+ODh+ODg+OCr+OCuVxuLy8gY29uc3QgaW5kaWNlcyA9IFtcbi8vICAgICAwLCAxLCAyLCAyLCAzLCAwLCAvLyDliY3pnaJcbi8vICAgICAxLCA1LCA2LCA2LCAyLCAxLCAvLyDlj7PpnaJcbi8vICAgICA1LCA0LCA3LCA3LCA2LCA1LCAvLyDog4zpnaJcbi8vICAgICA0LCAwLCAzLCAzLCA3LCA0LCAvLyDlt6bpnaJcbi8vICAgICAzLCAyLCA2LCA2LCA3LCAzLCAvLyDkuIrpnaJcbi8vICAgICA0LCA1LCAxLCAxLCAwLCA0ICAvLyDkuIvpnaJcbi8vIF07XG5cbi8vIC8vIOiJsuaDheWgsVxuLy8gY29uc3QgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShbXG4vLyAgIDEuMCwgMS4wLCAwLjAsIC8vIDog6buEIFxuLy8gICAgIDAuMCwgMS4wLCAwLjAsIC8vIDog57eRXG4vLyAgIDAuMCwgMC4wLCAwLjAsICAvLzog6buSXG4vLyAgMS4wLCAwLjAsIDAuMCwgLy8gOiDotaRcbi8vICAgICAgMS4wLCAxLjAsIDEuMCwgLy8gOiDnmb1cbi8vICAgICAwLjAsIDEuMCwgMS4wLCAvLyA6IOOCt+OCouODs1xuLy8gICAwLjAsIDAuMCwgMS4wLCAvLyA6IOmdklxuLy8gICAgIDEuMCwgMC4wLCAxLjAvLyA6IOe0q1xuLy8gXSk7XG5cblxuLy8gY29uc3QgdXZzID0gbmV3IEZsb2F0MzJBcnJheShbXG4vLyAgICAgMC41LCAxLFxuLy8gICAgIDAsIDAsXG4vLyAgICAgMSwgMFxuLy8gXSk7XG5cblxuXG5cbi8vICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbi8vICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCAncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKCB2ZXJ0aWNlcywgMyApICk7XG4vLyAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSggY29sb3JzLCAzKSk7XG4vLyAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSggdXZzLCAyKSk7XG4vLyAgICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4vLyBjb25zdCB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoJ3BhcmFzb2wuanBnJyk7XG4vLyAgICAgICAgIGdlb21ldHJ5LnNldEluZGV4KGluZGljZXMpOy8vLy/ov73liqAgIFxuLy8gICAgICAgICBnZW9tZXRyeS5jb21wdXRlVmVydGV4Tm9ybWFscygpOyAgXG5cbi8vICAgICAgICAgLy9jb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKDEsIDAsIDApIH0gKTtcbi8vICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgdmVydGV4Q29sb3JzOnRydWUgfSApO1xuLy8gICAgICAgICAvL2NvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG1hcDogdGV4dHVyZX0gKTtcblxuXG4vLyAgICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xuXG4vLyAgICAgICAgIGNvbnN0IGF4ZXNCYXJMZW5ndGggPSAxMC4wO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZChuZXcgVEhSRUUuQXhlc0hlbHBlcihheGVzQmFyTGVuZ3RoKSk7ICAvL3h5eui7uFxuXG4vLyAgICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4vLyAgICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4vLyAgICAgICAgIGNvbnN0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbi8vICAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuICAgIFxuLy8gICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbi8vICAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4vLyAgICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcblxuLy8gICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgfVxuICAgIFxuLy8gfVxuXG4vLyBhc3luYyBmdW5jdGlvbiByZWFkRmlsZShwYXRoKTogUHJvbWlzZTxzdHJpbmc+IHtcbi8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUgPT4ge1xuLy8gICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuRmlsZUxvYWRlcigpO1xuLy8gICAgICAgICBsb2FkZXIubG9hZChwYXRoLCAoZGF0YSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZFN0cmluZyA9IGRlY29kZXIuZGVjb2RlKGRhdGEpO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlY29kZWRTdHJpbmcpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICk7XG4vLyAgICAgfSkpO1xuLy8gfVxuXG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuLy8gZnVuY3Rpb24gaW5pdCgpIHtcbi8vICAgICBsZXQgY29udGFpbmVyID0gbmV3IFRocmVlSlNDb250YWluZXIoKTtcblxuLy8gICAgIGxldCB2aWV3cG9ydCA9IGNvbnRhaW5lci5jcmVhdGVSZW5kZXJlckRPTSg2NDAsIDQ4MCwgbmV3IFRIUkVFLlZlY3RvcjMoMiwgMiwgMykpO1xuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xuLy8gfVxuXG4vLyAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLzIyRkkwMDQg6Zi/6YOoIOaYjuaXpeaoueS7peS4i+OBr+esrDXlm54gNS0yLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuLy8gaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuXG4vLyBjbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbi8vICAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbi8vICAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcblxuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuXG4vLyAgICAgfVxuXG4vLyAgICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4vLyAgICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbi8vICAgICAgICAgbGV0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuLy8gICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7IC8v44K344Oj44OJ44Km44Oe44OD44OX44KS5pyJ5Yq544Gr44GZ44KLXG5cbi8vICAgICAgICAgLy/jgqvjg6Hjg6njga7oqK3lrppcbi8vICAgICAgICAgbGV0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4vLyAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4vLyAgICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4vLyAgICAgICAgIGxldCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuLy8gICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4vLyAgICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxuLy8gICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbi8vICAgICAgICAgbGV0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuLy8gICAgICAgICAgICAgb3JiaXRDb250cm9scy51cGRhdGUoKTtcblxuLy8gICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XG4vLyAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuLy8gICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4vLyAgICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4vLyAgICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuLy8gICAgIH1cblxuLy8gICAgIC8vIOOCt+ODvOODs+OBruS9nOaIkCjlhajkvZPjgacx5ZueKVxuLy8gICAgIHByaXZhdGUgY3JlYXRlU2NlbmUgPSAoKSA9PiB7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuLy8gICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxuLy8gICAgICAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuLy8gICAgICAgICBsZXQgbHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLm5vcm1hbGl6ZSgpO1xuLy8gICAgICAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldChsdmVjLngsIGx2ZWMueSwgbHZlYy56KTtcbi8vICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbi8vICAgICAgICAgbGV0IHBvaW50czpUSFJFRS5WZWN0b3IyW10gPSBbXTtcbi8vICAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoMCwgLTAuNSkpO1xuLy8gICAgICAgICAvLyBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMigwLjUsIDApKTtcbi8vICAgICAgICAgLy8gcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoMC4wLCAwLjUpKTtcbi8vICAgICAgICAgbGV0IGxhdGhlR2VvbWV0cnkgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMpO1xuLy8gICAgICAgICBsZXQgbGF0aGVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoKTtcbi8vICAgICAgICAgbGV0IGxhdGhlTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGxhdGhlR2VvbWV0cnksIGxhdGhlTWF0ZXJpYWwpO1xuLy8gICAgICAgICB0aGlzLnNjZW5lLmFkZChsYXRoZU1lc2gpO1xuXG4vLyAgICAgICAgIGxldCBkcmF3U2hhcGUgPSAoKT0+IHtcbi8vICAgICAgICAgICAgIC8vIFRIUkVFLlNoYXBl44KS5L2c5oiQXG4vLyAgICAgICAgICAgICBsZXQgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgICAgXG4vLyAgICAgICAgICAgICAvLyDlvaLnirbjgpLlrprnvqkgXG4vLyAgICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMiwgMik7XG4vLyAgICAgICAgICAgICBzaGFwZS5saW5lVG8oMiwgLTIpO1xuLy8gICAgICAgICAgICAgc2hhcGUubGluZVRvKC0yLCAtMik7XG4vLyAgICAgICAgICAgICBzaGFwZS5saW5lVG8oLTIsIDIpO1xuXG4vLyAgICAgICAgICAgICBsZXQgaG9sZSA9IG5ldyBUSFJFRS5QYXRoKCk7XG4vLyAgICAgICAgICAgICBob2xlLm1vdmVUbygtMS41LCAtMC41KTtcbi8vICAgICAgICAgICAgIGhvbGUubGluZVRvKDEuNSwgLTAuNSk7XG4vLyAgICAgICAgICAgICBob2xlLmxpbmVUbygxLjUsIDEuMyk7XG4vLyAgICAgICAgICAgICBob2xlLmxpbmVUbygtMS41LCAxLjMpO1xuLy8gICAgICAgICAgICAgaG9sZS5saW5lVG8oLTEuNSwgLTAuNSk7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIHNoYXBlLmhvbGVzLnB1c2goaG9sZSk7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbi8vICAgICB9XG5cblxuLy8gICAgIGxldCBkcmF3aG9sZSA9ICgpPT4ge1xuXG4vLyAgICAgbGV0IGhvbGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcblxuLy8gICAgIGhvbGUubW92ZVRvKC0xLjUsIC0wLjUpO1xuLy8gICAgIGhvbGUubGluZVRvKDEuNSwgLTAuNSk7XG4vLyAgICAgaG9sZS5saW5lVG8oMS41LCAxLjMpO1xuLy8gICAgIGhvbGUubGluZVRvKC0xLjUsIDEuMyk7XG4gICAgXG4gICAgXG4vLyAgICAgcmV0dXJuIGhvbGU7XG4vLyAgICAgfVxuXG4gICAgXG5cbi8vICAgICBsZXQgZXh0cnVkZVNldHRpbmdzID0ge1xuLy8gICAgICAgICBzdGVwczogMixcbi8vICAgICAgICAgZGVwdGg6IDgsXG4vLyAgICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4vLyAgICAgICAgIGJldmVsVGhpY2tuZXNzOiA0LFxuLy8gICAgICAgICBiZXZlbFNpemU6IDIsXG4vLyAgICAgICAgIGJldmVsU2VnbWVudHM6IDNcbi8vICAgICB9O1xuXG4vLyAgICAgbGV0IHNoYXBlR2VvbWV0cnkgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdTaGFwZSgpLCBleHRydWRlU2V0dGluZ3MpXG4vLyAgICAgbGV0IGxpbmVNYXRlcmlhbCAgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe2NvbG9yOiAweGZmZmZmZiwgdHJhbnNwYXJlbnQ6dHJ1ZSwgb3BhY2l0eTowLjV9KSBcbi8vICAgICBsZXQgbWVzaE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjoweDAwZmZmZiwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbi8vICAgICBsZXQgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbi8vICAgICBncm91cC5hZGQobmV3IFRIUkVFLk1lc2goc2hhcGVHZW9tZXRyeSxtZXNoTWF0ZXJpYWwpKTtcbi8vICAgICBncm91cC5hZGQobmV3IFRIUkVFLkxpbmVTZWdtZW50cyhzaGFwZUdlb21ldHJ5LGxpbmVNYXRlcmlhbCkpO1xuLy8gICAgIHRoaXMuc2NlbmUuYWRkKGdyb3VwKTtcblxuLy8gICAgIGxldCBzaGFwZUdlb21ldHJ5MiA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd2hvbGUoKSwgZXh0cnVkZVNldHRpbmdzKVxuLy8gICAgIGxldCBsaW5lTWF0ZXJpYWwyICA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4ZmZmZmZmLCB0cmFuc3BhcmVudDp0cnVlLCBvcGFjaXR5OjAuNX0pIFxuLy8gICAgIGxldCBtZXNoTWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjoweDAwMDBmZiwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbi8vICAgICBsZXQgZ3JvdXAyID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4vLyAgICAgZ3JvdXAyLmFkZChuZXcgVEhSRUUuTWVzaChzaGFwZUdlb21ldHJ5MixtZXNoTWF0ZXJpYWwyKSk7XG4vLyAgICAgZ3JvdXAyLmFkZChuZXcgVEhSRUUuTGluZVNlZ21lbnRzKHNoYXBlR2VvbWV0cnkyLGxpbmVNYXRlcmlhbDIpKTtcbi8vICAgICB0aGlzLnNjZW5lLmFkZChncm91cDIpO1xuXG4vLyAgICAgLy8g44K/44Kk44Ok44Gu55Sf5oiQXG4vLyAgICAgbGV0IHRpcmVSYWRpdXMgPSAxO1xuLy8gICAgIGxldCB0aXJlSGVpZ2h0ID0gMC41O1xuLy8gICAgIGxldCB0aXJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSh0aXJlUmFkaXVzLCB0aXJlUmFkaXVzLCB0aXJlSGVpZ2h0LCAzMik7XG4vLyAgICAgbGV0IHRpcmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDMzMzMzMyB9KTtcblxuLy8gLy8g44K/44Kk44Ok44KS55u05pa55L2T44Gu5Lih5YG044Gr6YWN572uXG4vLyBsZXQgQSA9IDEuNTtcbi8vIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqICs9IDIpIHtcblxuLy8gICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpICs9IDIpIHtcbi8vICAgICBsZXQgdGlyZU1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aXJlR2VvbWV0cnksIHRpcmVNYXRlcmlhbCk7XG4vLyAgICAgdGlyZU1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyOyAvLyDjgr/jgqTjg6TjgpLmsLTlubPjgavlm57ou6Jcbi8vICAgICB0aXJlTWVzaC5wb3NpdGlvbi5zZXQoaSAqIDIsIC0xLjUsIEEpOyAvLyDkvY3nva7oqr/mlbRcbi8vICAgICB0aGlzLnNjZW5lLmFkZCh0aXJlTWVzaCk7XG4vLyAgICAgfVxuLy8gICAgIEEgKz0gNTtcbi8vIH1cblxuLy8gLy8g44G+44Gp44Gu55Sf5oiQXG4vLyBsZXQgd2luZG93V2lkdGggPSA0LjE7XG4vLyBsZXQgd2luZG93SGVpZ2h0ID0gMS44O1xuLy8gbGV0IHdpbmRvd0RlcHRoID0gMi4zO1xuLy8gbGV0IHdpbmRvd0dlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQsIHdpbmRvd0RlcHRoKTtcbi8vIGxldCB3aW5kb3dNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZn0pO1xuXG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxOyBpICs9IDEpIHtcbi8vICAgICAgICAgbGV0IHdpbmRvd01lc2ggPSBuZXcgVEhSRUUuTWVzaCh3aW5kb3dHZW9tZXRyeSwgd2luZG93TWF0ZXJpYWwpO1xuXG4vLyAgICAgICAgIHdpbmRvd01lc2gucG9zaXRpb24uc2V0KDAsIDAuNiwgMi41ICsgaSAqIDMpOyBcbi8vICAgICAgICAgdGhpcy5zY2VuZS5hZGQod2luZG93TWVzaCk7XG4vLyAgICAgfVxuXG5cblxuICAgIFxuICAgIFxuLy8gICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbi8vICAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4vLyAgICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcblxuLy8gICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbi8vIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbi8vICAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDgsIDE1KSk7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG4vLyB9XG5cblxuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8yMkZJMDA0IOmYv+mDqCDmmI7ml6XmqLnku6XkuIvjga/nrKw15ZueIDUtMS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbi8vIGltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcblxuLy8gY2xhc3MgVGhyZWVKU0NvbnRhaW5lciB7XG4vLyAgICAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XG4vLyAgICAgcHJpdmF0ZSBsaWdodDogVEhSRUUuTGlnaHQ7XG5cbi8vICAgICBjb25zdHJ1Y3RvcigpIHtcblxuLy8gICAgIH1cblxuLy8gICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspKlxuLy8gICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4vLyAgICAgICAgIGxldCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4vLyAgICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4vLyAgICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4NDk1ZWQpKTtcbi8vICAgICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlOyAvL+OCt+ODo+ODieOCpuODnuODg+ODl+OCkuacieWKueOBq+OBmeOCi1xuXG4vLyAgICAgICAgIC8v44Kr44Oh44Op44Gu6Kit5a6aXG4vLyAgICAgICAgIGxldCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuLy8gICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuLy8gICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuLy8gICAgICAgICBsZXQgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbi8vICAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuLy8gICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIxyZW5kZXJcbi8vICAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4vLyAgICAgICAgIGxldCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbi8vICAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbi8vICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuLy8gICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbi8vICAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuLy8gICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuLy8gICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbi8vICAgICB9XG5cbi8vICAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbi8vICAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuLy8gICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbi8vICAgICAgICAgLy/jg6njgqTjg4jjga7oqK3lrppcbi8vICAgICAgICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbi8vICAgICAgICAgbGV0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbi8vICAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuLy8gICAgICAgICBsZXQgcG9pbnRzOlRIUkVFLlZlY3RvcjJbXSA9IFtdO1xuXG4vLyAgICAgICAgIC8qIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IyKDAsIC0wLjUpKTtcbi8vICAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMCkpO1xuLy8gICAgICAgICAgcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoMC4wLCAwLjUpKTtcbi8vICAgICAgICAgICovXG4gICAgICBcbi8vICAgICAgICAgbGV0IHBvaW50TnVtID0gMTA7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAtNDsgaSA8PSA0OyBpICs9IDAuNSkge1xuLy8gICAgICAgICAgICAgbGV0IHggPSBpO1xuLy8gICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmV4cCh4ICogMC4zKSogMC41OyAvLyDkv4LmlbDjgpLoqr/mlbTjgZfjgablvaLjgpLliLblvqFcbi8vICAgICAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IyKHksIHgpKTtcbi8vICAgICAgICAgfVxuICAgICAgICBcbi8vICAgICAgICAgLypsZXQgZHJhd1NoYXBlID0gKCk9PiB7XG4vLyAgICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuLy8gICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuLy8gICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4vLyAgICAgICAgICAgICAvLyBzaGFwZS5tb3ZlVG8oMSwgMSk7XG4vLyAgICAgICAgICAgICAvLyBzaGFwZS5saW5lVG8oMSwgLTEpO1xuLy8gICAgICAgICAgICAgLy8gc2hhcGUubGluZVRvKC0xLCAtMSk7XG4vLyAgICAgICAgICAgICAvLyBzaGFwZS5saW5lVG8oLTEsIDEpO1xuXG4vLyAgICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMSwgMSk7XG4vLyAgICAgICAgICAgICBzaGFwZS5saW5lVG8oMSwgLTEpO1xuLy8gICAgICAgICAgICAgc2hhcGUucXVhZHJhdGljQ3VydmVUbygwLCAtMiwgLTEsIC0xKTtcbi8vICAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMSwgMSk7XG5cbi8vICAgICAgICAgICAgIGxldCBob2xlID0gbmV3IFRIUkVFLlBhdGgoKTtcbi8vICAgICAgICAgICAgIGhvbGUuYWJzZWxsaXBzZSgwLCAwLCAwLjI1LCAwLjI1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UsIDApO1xuLy8gICAgICAgICAgICAgc2hhcGUuaG9sZXMucHVzaChob2xlKTtcbi8vICAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAqL1xuXG4vLyAgICAgICAgbGV0IGxhdGhlR2VvbWV0cnkgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMpO1xuLy8gICAgICAgICAvL2xldCBsYXRoZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCgpO1xuLy8gICAgICAgICBsZXQgbGF0aGVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe3NpZGU6VEhSRUUuRG91YmxlU2lkZX0pO1xuLy8gICAgICAgICBsZXQgbGF0aGVNZXNoID0gbmV3IFRIUkVFLk1lc2gobGF0aGVHZW9tZXRyeSwgbGF0aGVNYXRlcmlhbCk7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGxhdGhlTWVzaCk7XG5cbi8vICAgICAgICAgLypcbi8vICAgICAgICAgbGV0IHNoYXBlR2VvbWV0cnkgPSBuZXcgVEhSRUUuU2hhcGVHZW9tZXRyeShkcmF3U2hhcGUoKSk7XG4vLyAgICAgICAgIGxldCBsaW5lTWF0ZXJpYWwgID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtjb2xvcjogMHhmZmZmZmYsIHRyYW5zcGFyZW50OnRydWUsIG9wYWNpdHk6MC41fSkgXG4vLyAgICAgICAgIGxldCBtZXNoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOjB4MDBmZmZmLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuLy8gICAgICAgICBsZXQgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbi8vICAgICAgICAgZ3JvdXAuYWRkKG5ldyBUSFJFRS5NZXNoKHNoYXBlR2VvbWV0cnksbWVzaE1hdGVyaWFsKSk7XG4vLyAgICAgICAgIGdyb3VwLmFkZChuZXcgVEhSRUUuTGluZVNlZ21lbnRzKHNoYXBlR2VvbWV0cnksbGluZU1hdGVyaWFsKSk7XG4vLyAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGdyb3VwKTtcbi8vICAgICAgICAgKi9cblxuLy8gICAgICAgICBsZXQgZXh0cnVkZVNldHRpbmdzID0ge1xuLy8gICAgICAgICAgICAgc3RlcHM6IDIsXG4vLyAgICAgICAgICAgICBkZXB0aDogNCxcbi8vICAgICAgICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4vLyAgICAgICAgICAgICBiZXZlbFRoaWNrbmVzczogNCxcbi8vICAgICAgICAgICAgIGJldmVsU2l6ZTogMixcbi8vICAgICAgICAgICAgIGJldmVsU2VnbWVudHM6IDNcbi8vICAgICAgICAgICAgIH07XG4vLyAgICAgICAgIC8vIGxldCBzaGFwZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3U2hhcGUoKSwgZXh0cnVkZVNldHRpbmdzKVxuLy8gICAgICAgICAvLyBsZXQgbGluZU1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtjb2xvcjogMHhmZmZmZmYsIHRyYW5zcGFyZW50OnRydWUsIG9wYWNpdHk6MC41fSk7XG4vLyAgICAgICAgIC8vIGxldCBtZXNoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOjB4MDBmZmZmLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuLy8gICAgICAgICAvLyBsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHNoYXBlR2VvbWV0cnksbWVzaE1hdGVyaWFsKTtcbi8vICAgICAgICAgLy8gbGV0IGxpbmUgPSBuZXcgVEhSRUUuTGluZShzaGFwZUdlb21ldHJ5LGxpbmVNYXRlcmlhbCk7XG4vLyAgICAgICAgIC8vIGxldCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuLy8gICAgICAgICAvLyBncm91cC5hZGQobWVzaCk7XG4vLyAgICAgICAgIC8vIGdyb3VwLmFkZChsaW5lKTtcbi8vICAgICAgICAgLy8gdGhpcy5zY2VuZS5hZGQoZ3JvdXApO1xuXG5cblxuLy8gICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbi8vICAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4vLyAgICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcblxuLy8gICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbi8vIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbi8vICAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDgsIDgpKTtcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbi8vIH1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLzIyRkkwMDQg6Zi/6YOoIOaYjuaXpeaoueS7peS4i+OBr+esrDTlm54vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IEdVSSBmcm9tICdsaWwtZ3VpJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuXG5jbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGdlb21ldHJ5OiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBwcml2YXRlIG1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbDtcbiAgICBwcml2YXRlIGN1YmU6IFRIUkVFLk1lc2g7XG4gICAgcHJpdmF0ZSBsaWdodDogVEhSRUUuTGlnaHQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspKlxuICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gICAgICAgIGxldCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4NDk1ZWQpKTtcbiAgICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlOyAvL+OCt+ODo+ODieOCpuODnuODg+ODl+OCkuacieWKueOBq+OBmeOCi1xuXG4gICAgICAgIC8v44Kr44Oh44Op44Gu6Kit5a6aXG4gICAgICAgIGxldCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuICAgICAgICBsZXQgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIxyZW5kZXJcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XG4gICAgICAgIGxldCBndWkgPSBuZXcgR1VJKCk7IC8vIEdVSeeUqOOBruOCpOODs+OCueOCv+ODs+OCueOBrueUn+aIkFxuICAgICAgICAvKlxuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHg1NWZmMDAgfSk7XG4gICAgICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLmN1YmUuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG4gICAgICAgIGxldCBndWlPYmogPSB7IHJvdGF0aW9uU3BlZWRYOiAwLjA1LCByb3RhdGlvblNwZWVkWTogMC4wNX07XG4gICAgICAgIGd1aS5hZGQoZ3VpT2JqLCBcInJvdGF0aW9uU3BlZWRYXCIsIDAuMCwgMC4yKTtcbiAgICAgICAgZ3VpLmFkZChndWlPYmosIFwicm90YXRpb25TcGVlZFlcIiwgMC4wLCAwLjIpXG4gICAgICAgICovXG5cbiAgICAgICAgLypsZXQgZ3VpT2JqID0geyBjb2xvcjogJzB4ZmZmZmZmJ307XG4gICAgICAgIGd1aS5hZGRDb2xvcihndWlPYmosIFwiY29sb3JcIik7XG4gICAgICAgICovXG4gICAgICAgIC8qbGV0IGd1aU9iaiA9IHsgdmlzaWJsZTogdHJ1ZX07XG4gICAgICAgIGd1aS5hZGQoZ3VpT2JqLCBcInZpc2libGVcIik7XG4gICAgICAgICovXG4gICAgICAgIC8qbGV0IGd1aU9iaiA9IHsgc2l6ZTogJ01lZGl1bSd9XG4gICAgICAgIGd1aS5hZGQoIGd1aU9iaiwgJ3NpemUnLCBbICdTbWFsbCcsICdNZWRpdW0nLCAnTGFyZ2UnIF0gKVxuICAgICAgICBcbiAgICAgICAgbGV0IGd1aU9iaiA9IHsgb2JqZWN0OiAnV2F2ZSd9XG4gICAgICAgIGd1aS5hZGQoIGd1aU9iaiwgJ29iamVjdCcsIFsgJ1dhdmUnLCAnS2xlaW4nIF0gKVxuXG4gICAgICAgIGxldCBXYXZlID0gKHU6bnVtYmVyLCB2Om51bWJlciwgdGFyZ2V0OlRIUkVFLlZlY3RvcjMpID0+e1xuICAgICAgICAvKiAgIGxldCByID0gMzA7XG4gICAgICAgICAgICBsZXQgeCA9IHUgKiByIC0gci8yO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLnNpbih4KSAqIDIuMDtcbiAgICAgICAgICAgIGxldCB6ID0gdiAqIHIgLSByLzI7XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHgsIHksIHopO1xuICAgICAgICAgXG4gICAgICAgICAgICBsZXQgciA9IDMwO1xuICAgICAgICAgICAgbGV0IHggPSAodSAtIDAuNSkgKiByO1xuICAgICAgICAgICAgbGV0IHogPSAodiAtIDAuNSkgKiByO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLnNpbihNYXRoLnNxcnQoeCAqIHggKyB6ICogeikgKiAxLjApICogMi4wOyAgLy8g5Lit5b+D44GL44KJ44Gu6Led6Zui44Gr5b+c44GY44Gm5rOi44KS55Sf5oiQXG4gICAgICAgICAgICB0YXJnZXQuc2V0KHgsIHksIHopO1xuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgbGV0IEtsZWluID0gKHU6bnVtYmVyLCB2Om51bWJlciwgdGFyZ2V0OlRIUkVFLlZlY3RvcjMpID0+e1xuICAgICAgICAgICAgICBsZXQgVSA9ICAyKiAgdSAqIE1hdGguUEk7XG4gICAgICAgICAgICAgIGxldCBWID0gMiAqIHYgKiBNYXRoLlBJIDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgbGV0IHIgPSA0IC0gMiAqIE1hdGguY29zKFUpO1xuICAgICAgICAgICAgbGV0IHg7XG4gICAgICAgICAgICBsZXQgeTtcbiAgICAgICAgICAgIGlmKDAgPD0gVSAmJiBVIDwgTWF0aC5QSSl7XG4gICAgICAgICAgICAgICAgICAgIHggPSA2ICogTWF0aC5jb3MoVSkgKigxICsgTWF0aC5zaW4oVSkpICsgciAqIE1hdGguY29zKFUpICogTWF0aC5jb3MoVik7XG4gICAgICAgICAgICAgICAgICAgIHkgPSAxNiAqICBNYXRoLnNpbihVKSArIHIgKiBNYXRoLnNpbihVKSAqIE1hdGguY29zKFYpO1xuICAgICAgICAgICAgICAgfWVsc2UgaWYoTWF0aC5QSSA8PSBVICAmJiBVIDw9IDIgKiBNYXRoLlBJKXtcbiAgICAgICAgICAgICAgICAgICAgeCA9IDYgKiBNYXRoLmNvcyhVKSAqKDEgKyBNYXRoLnNpbihVKSkgKyByICogTWF0aC5jb3MoViArIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgICAgICB5ID0gMTYgKiBNYXRoLnNpbihVKTtcbiAgICAgICAgfVxuICAgICAgICAgICBsZXQgeiA9IE1hdGguc2luKFYpICogcjtcbiAgICAgICAgdGFyZ2V0LnNldCh4LCB5LCB6KTtcblxufVxuICAgICAgICBsZXQgcGFyYW1HZW9tZXRyeSA9IG5ldyBUSFJFRS5QYXJhbWV0cmljR2VvbWV0cnkoV2F2ZSwgMzAsIDMwKTtcbiAgICAgICAgbGV0IHBhcmFtTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOjB4MDBmZmZmLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuICAgICAgICBsZXQgbGluZU1hdGVyaWFsICA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4ZmZmZmZmLHRyYW5zcGFyZW50OnRydWUsIG9wYWNpdHk6MC41fSk7XG4gICAgICAgIGxldCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBncm91cC5hZGQobmV3IFRIUkVFLk1lc2gocGFyYW1HZW9tZXRyeSxwYXJhbU1hdGVyaWFsKSk7XG4gICAgICAgIGdyb3VwLmFkZChuZXcgVEhSRUUuTGluZVNlZ21lbnRzKHBhcmFtR2VvbWV0cnksbGluZU1hdGVyaWFsKSk7XG5cblxuICAgICAgICBsZXQgcGFyYW1HZW9tZXRyeTIgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KEtsZWluLCAzMCwgMzApO1xuICAgICAgICBsZXQgcGFyYW1NYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOjB4MDBmZmZmLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuICAgICAgICBsZXQgbGluZU1hdGVyaWFsMiAgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe2NvbG9yOiAweGZmZmZmZix0cmFuc3BhcmVudDp0cnVlLCBvcGFjaXR5OjAuNX0pO1xuICAgICAgICBsZXQgZ3JvdXAyID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGdyb3VwMi5hZGQobmV3IFRIUkVFLk1lc2gocGFyYW1HZW9tZXRyeTIscGFyYW1NYXRlcmlhbDIpKTtcbiAgICAgICAgZ3JvdXAyLmFkZChuZXcgVEhSRUUuTGluZVNlZ21lbnRzKHBhcmFtR2VvbWV0cnkyLGxpbmVNYXRlcmlhbDJcbiAgICAgICAgKSk7XG5cblxuICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxuICAgICAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuICAgICAgICBsZXQgbHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLm5vcm1hbGl6ZSgpO1xuICAgICAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldChsdmVjLngsIGx2ZWMueSwgbHZlYy56KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG4gICAgXG4gICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jOabtOaWsFxuICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbiAgICAgICAgbGV0IHVwZGF0ZTogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuICAgICAgICAvLyAgICB0aGlzLmN1YmUucm90YXRlWCgwLjAxKTtcbiAgICAgICAgLy8gICAgdGhpcy5jdWJlLnJvdGF0ZVgoZ3VpT2JqLnJvdGF0aW9uU3BlZWRYKTtcbiAgICAgICAgLy8gICAgdGhpcy5jdWJlLnJvdGF0ZVkoZ3VpT2JqLnJvdGF0aW9uU3BlZWRZKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGd1aU9iai5vYmplY3QgPT0gXCJXYXZlXCIpe1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUoZ3JvdXAyKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGdyb3VwKTtcbiAgICAgICAgfVxuICAgICAgICBpZihndWlPYmoub2JqZWN0ID09IFwiS2xlaW5cIil7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZShncm91cCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChncm91cDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGxldCBjb250YWluZXIgPSBuZXcgVGhyZWVKU0NvbnRhaW5lcigpO1xuXG4gICAgbGV0IHZpZXdwb3J0ID0gY29udGFpbmVyLmNyZWF0ZVJlbmRlcmVyRE9NKDY0MCwgNDgwLCBuZXcgVEhSRUUuVmVjdG9yMygtMTUsIDE1LCAxNSkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xufVxuKi9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vMjJGSTAwNCDpmL/pg6gg5piO5pel5qi55Lul5LiL44Gv56ysM+Wbni8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcblxuY2xhc3MgVGhyZWVKU0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XG4gICAgcHJpdmF0ZSBwbGFuZTogVEhSRUUuTWVzaDtcbiAgICBwcml2YXRlIGdyb3VwOiBUSFJFRS5Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7IC8v44K344Oj44OJ44Km44Oe44OD44OX44KS5pyJ5Yq544Gr44GZ44KLXG5cbiAgICAgICAgLy/jgqvjg6Hjg6njga7oqK3lrppcbiAgICAgICAvLyBsZXQgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aWR0aCAvIGhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICAgICBsZXQgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSh3aWR0aC8tMTUwLjAsIHdpZHRoLzE1MC4wLCBoZWlnaHQvMTUwLjAsIGhlaWdodC8tMTUwLjAsIDAuMSwgMTAwMCk7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIGxldCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxuICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbiAgICAgICAgbGV0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgb3JiaXRDb250cm9scy51cGRhdGUoKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIH1cblxuICAgIC8vIOOCt+ODvOODs+OBruS9nOaIkCjlhajkvZPjgacx5ZueKVxuICAgIHByaXZhdGUgY3JlYXRlU2NlbmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXG4gICAgICAgIC8vbGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpOyBcbiAgICAgICAgLy9sZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC43LCAyMCwgMjApO1xuICAgICAgICAvL2xldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcbiAgICAgICAgbGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEuOCwgMS44LCAxLjgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG1hdEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IEEgPSAwOyBBIDwgMzsgQSsrKSB7XG4gICAgICAgICAgICBtYXRBcnJheS5wdXNoKG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweDAwOWU2MCwgbWV0YWxuZXNzOiAwLjMsIHJvdWdobmVzczogMC44IH0pKTtcbiAgICAgICAgICAgIG1hdEFycmF5LnB1c2gobmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmY1ODAwIH0pKTtcbiAgICAgICAgICAgIG1hdEFycmF5LnB1c2gobmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4YzQxZTNhIH0pKTtcbiAgICAgICAgICAgIG1hdEFycmF5LnB1c2gobmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4YWRmZjJmZmZ9KSk7XG4gICAgICAgICAgICBtYXRBcnJheS5wdXNoKG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGZmNTgwMCwgc2hpbmluZXNzOiAxMDAgfSkpO1xuICAgICAgICAgICAgbWF0QXJyYXkucHVzaChuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHg1NWZmMDAgfSkpO1xuICAgICAgICAgICAgbWF0QXJyYXkucHVzaChuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwZmZmZiB9KSk7XG4gICAgICAgICAgICBtYXRBcnJheS5wdXNoKG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweDAwNTFiYSwgbWV0YWxuZXNzOiAwLjYsIHJvdWdobmVzczogMC40IH0pKTtcbiAgICAgICAgICAgIG1hdEFycmF5LnB1c2gobmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmZkNzAwZmYgfSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4NTVmZjAwIH0pO1xuICAgICAgICAvL2xldCBtYXRlcmlhbCAgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHg1NWZmMDAgfSk7XG4gICAgICAgIC8vbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4MDAwZmZmIH0pO1xuICAgICAgICAvL2xldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoKTtcbiAgICAgICAgLy9sZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4NTVmZjAwfSk7XG4gICAgICAgIC8vbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjogMHg1NWZmMDB9KTtcbiAgICAgICAgLy9sZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHg1NWZmMDAgfSk7XG4gICAgICAgIC8vbWF0ZXJpYWwubWV0YWxuZXNzID0gMDsvL+WApOOCkuWkieOBiOOBpuOBv+OBvuOBl+OCh+OBhlxuICAgICAgICAvL21hdGVyaWFsLnJvdWdobmVzcyA9IDA7Ly/lgKTjgpLlpInjgYjjgabjgb/jgb7jgZfjgofjgYZcbiAgICAgICAgLy9tYXRlcmlhbC53aXJlZnJhbWUgPSB0cnVlO1xuICAgICAgICAvL21hdGVyaWFsLm9wYWNpdHkgPSAwLjE7XG4gICAgICAgIC8vbWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgICAgICAvL21hdGVyaWFsLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpIzeDPjgavkuKbjgbnjgabnlJ/miJBcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgMzsgeisrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzOyB5KyspIHtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4Pjgrfjg6Xjga7nlJ/miJBcbiAgICAgICAgICAgICAgICAvL2xldCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRBcnJheVsoeCArIHkgKyB6KSAlIG1hdEFycmF5Lmxlbmd0aF0pO1xuXG4gICAgICAgICAgICAgICAgbWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyDjg6Hjg4Pjgrfjg6Xjga7kvY3nva7jgpLoqK3lrppcbiAgICAgICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnNldCh4ICogMiAtIDIsIHkgKiAyIC0gMiwgeiAqIDIgLSAyKSA7XG4gICAgICAgICAgICAgICAgLy8g44Oh44OD44K344Ol44KS44K344O844Oz44Gr6L+95YqgXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobWVzaCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLnNjZW5lLmFkZChtZXNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ncm91cCk7XG4gICAgICAgIC8vIOW5s+mdouOBrueUn+aIkFxuICAgICAgICBsZXQgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIwLCAyMCk7XG4gICAgICAgIGxldCBwbGFuZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwZmYgfSk7XG4gICAgICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5wbGFuZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTsgLy/lvbHjgpLlj5fjgZHjgovjgojjgYbjgavjgZnjgotcbiAgICAgICAgdGhpcy5wbGFuZS5wb3NpdGlvbi55ID0gLTU7XG4gICAgICAgIHRoaXMucGxhbmUucm90YXRpb24ueCA9IC1NYXRoLlBJIC8gMjtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wbGFuZSk7XG5cbiAgICAgICAgLy/jg6njgqTjg4jjga7oqK3lrppcbiAgICAgICAgbGV0IGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDEuMCk7XG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKTtcbiAgICAgICAgbGlnaHQudGFyZ2V0ID0gdGhpcy5wbGFuZTtcbiAgICAgICAgbGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGxpZ2h0KTtcblxuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWCgwLjAxKTsgLy8g6L+95YqgXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWSgwLjAxNSk7XG4gICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVooMC4wMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKC0zLCAzLCAzKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8yMkZJMDA0IOmYv+mDqCDmmI7ml6XmqLnku6XkuIvjga/nrKzkuozlm54vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKlxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbmNsYXNzIFRocmVlSlNDb250YWluZXIge1xuICAgIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xuICAgIHByaXZhdGUgZ2VvbWV0cnk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIHByaXZhdGUgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuICAgIHByaXZhdGUgY3ViZTogVEhSRUUuTWVzaDtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuXG4gICAgICAgIC8v44Kr44Oh44Op44Gu6Kit5a6aXG4gICAgICAgIGxldCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuICAgICAgICBsZXQgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIxyZW5kZXJcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IDB4NTVmZjAwIH0pO1xuICAgICAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5jdWJlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICAvL3RoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cbiAgICAgICAgbGV0IGFkZGN1YmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAvL0N1YmXjga7jgrXjgqTjgrrjgpLmsbrjgoHjgotcbiAgICAgICAgICAgIGxldCBjdWJlU2l6ZTogbnVtYmVyID0gTWF0aC5jZWlsKDEpO1xuICAgICAgICAgICAgLy9HZW9tZXRyeeOBqE1hdGVyaWFs44KS5L2c5oiQ44GZ44KLXG4gICAgICAgICAgICBsZXQgY3ViZUdlb21ldHJ5OiBUSFJFRS5CdWZmZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShjdWJlU2l6ZSwgY3ViZVNpemUsIGN1YmVTaXplKTtcbiAgICAgICAgICAgIGxldCBjdWJlTWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmIH0pO1xuICAgICAgICAgICAgLy9DdWJl44Kq44OW44K444Kn44Kv44OI44KS55Sf5oiQ44GZ44KLXG4gICAgICAgICAgICBsZXQgY3ViZUFkZDogVEhSRUUuTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICAgICAgICAgIC8vQ3ViZeOCquODluOCuOOCp+OCr+ODiOOBruODl+ODreODkeODhuOCo+OCkuioreWumuOBmeOCi1xuICAgICAgICAgICAgY3ViZUFkZC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1YmVBZGQubmFtZSA9IFwiY3ViZS1cIiArIHRoaXMuc2NlbmUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgLy9DdWJl44Kq44OW44K444Kn44Kv44OI44KS56e75YuV44GZ44KLXG4gICAgICAgICAgICBjdWJlQWRkLnBvc2l0aW9uLnggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApKSAtIDU7XG4gICAgICAgICAgICBjdWJlQWRkLnBvc2l0aW9uLnkgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogNSkpIC0gMi41O1xuICAgICAgICAgICAgY3ViZUFkZC5wb3NpdGlvbi56ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDIpKTtcbiAgICAgICAgICAgIC8vQ3ViZeOCquODluOCuOOCp+OCr+ODiOOCkuWbnui7ouOBleOBm+OCi1xuICAgICAgICAgICAgY3ViZUFkZC5yb3RhdGlvbi54ID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKE1hdGgucmFuZG9tKCkgKiA0NSk7XG4gICAgICAgICAgICBjdWJlQWRkLnJvdGF0aW9uLnkgPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoTWF0aC5yYW5kb20oKSAqIDQ1KTtcbiAgICAgICAgICAgIC8v44K344O844Oz44Gr6L+95Yqg44GZ44KLXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChjdWJlQWRkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBhZGRjdWJlKCk7XG4gICAgICAgICB9XG4qL1xuXG4vKlxuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpOyAvL+ODreOCsOOBruWQkOOBjeWHuuOBl1xuXG5cblxuICAgICAgICBsZXQgYWRkT2JqZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9HZW9tZXRyeeOBrueUn+aIkFxuICAgICAgICAgICAgbGV0IGFkZE9iamVjdEdlb21ldHJ5OiBUSFJFRS5CdWZmZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEwLCAxMCk7XG4gICAgICAgICAgICAvL01hdGVyaWFs44Gu55Sf5oiQXG4gICAgICAgICAgICBsZXQgbWVzaE1hdGVyaWFsOiBUSFJFRS5NYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoeyBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlIH0pO1xuICAgICAgICAgICAgLy/jgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcbiAgICAgICAgICAgIGxldCBhZGRPYmplY3Q6IFRIUkVFLk1lc2ggPSBuZXcgVEhSRUUuTWVzaChhZGRPYmplY3RHZW9tZXRyeSwgbWVzaE1hdGVyaWFsKTtcbiAgICAgICAgICAgIC8v44Kq44OW44K444Kn44Kv44OI44Gu44K344O844Oz44G444Gu6L+95YqgXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChhZGRPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGFkZE9iamVjdCgpO1xuXG4gICAgICAgIGxldCBhZGRPYmplY3QyID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9HZW9tZXRyeeOBrueUn+aIkFxuICAgICAgICAgICAgLy9sZXQgYWRkT2JqZWN0R2VvbWV0cnk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoIDEuNSwgMS41LCAxLjUsIDEuNSk7Ly9cbiAgICAgICAgICAgIGxldCBhZGRPYmplY3RHZW9tZXRyeTogVEhSRUUuQnVmZmVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC41LCAzMiwgMTYsIDAsIDIgKiBNYXRoLlBJLCAwLCBNYXRoLlBJKTtcbiAgICAgICAgICAgIC8vTWF0ZXJpYWzjga7nlJ/miJBcbiAgICAgICAgICAgIGxldCBtZXNoTWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7IHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSk7XG4gICAgICAgICAgICAvL+OCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxuICAgICAgICAgICAgbGV0IGFkZE9iamVjdDogVEhSRUUuTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGFkZE9iamVjdEdlb21ldHJ5LCBtZXNoTWF0ZXJpYWwpO1xuICAgICAgICAgICAgLy9DdWJl44Kq44OW44K444Kn44Kv44OI44Gu44OX44Ot44OR44OG44Kj44KS6Kit5a6a44GZ44KLXG4gICAgICAgICAgICBhZGRPYmplY3QuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgICAgICBhZGRPYmplY3QubmFtZSA9IFwiY3ViZS1cIiArIHRoaXMuc2NlbmUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgLy9DdWJl44Kq44OW44K444Kn44Kv44OI44KS56e75YuV44GZ44KLXG4gICAgICAgICAgICBhZGRPYmplY3QucG9zaXRpb24ueCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkpIC0gNTtcbiAgICAgICAgICAgIGFkZE9iamVjdC5wb3NpdGlvbi55ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDUpKSAtIDIuNTtcbiAgICAgICAgICAgIGFkZE9iamVjdC5wb3NpdGlvbi56ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDIpKTtcbiAgICAgICAgICAgIC8vQ3ViZeOCquODluOCuOOCp+OCr+ODiOOCkuWbnui7ouOBleOBm+OCi1xuICAgICAgICAgICAgYWRkT2JqZWN0LnJvdGF0aW9uLnggPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoTWF0aC5yYW5kb20oKSAqIDQ1KTtcbiAgICAgICAgICAgIGFkZE9iamVjdC5yb3RhdGlvbi55ID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKE1hdGgucmFuZG9tKCkgKiA0NSk7XG4gICAgICAgICAgICAvL+OCquODluOCuOOCp+OCr+ODiOOBruOCt+ODvOODs+OBuOOBrui/veWKoFxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoYWRkT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvKmZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgIGFkZE9iamVjdDIoKTtcbiAgICAgICAgfSovXG4vKlxuICAgICAgICBsZXQgYWRkT2JqZWN0MyA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vR2VvbWV0cnnjga7nlJ/miJBcbiAgICAgICAgICAgIC8vbGV0IGFkZE9iamVjdEdlb21ldHJ5OiBUSFJFRS5CdWZmZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KCAxLjUsIDEuNSwgMS41LCAxLjUpOy8vXG4gICAgICAgICAgICBsZXQgYWRkT2JqZWN0R2VvbWV0cnk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoMC41LCAwLjQsIDEyLCA0OCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgLy9NYXRlcmlhbOOBrueUn+aIkFxuICAgICAgICAgICAgbGV0IG1lc2hNYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHsgc2lkZTogVEhSRUUuRG91YmxlU2lkZSB9KTtcbiAgICAgICAgICAgIC8v44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXG4gICAgICAgICAgICBsZXQgYWRkT2JqZWN0OiBUSFJFRS5NZXNoID0gbmV3IFRIUkVFLk1lc2goYWRkT2JqZWN0R2VvbWV0cnksIG1lc2hNYXRlcmlhbCk7XG4gICAgICAgICAgICAvL0N1YmXjgqrjg5bjgrjjgqfjgq/jg4jjga7jg5fjg63jg5Hjg4bjgqPjgpLoqK3lrprjgZnjgotcbiAgICAgICAgICAgIGFkZE9iamVjdC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZE9iamVjdC5uYW1lID0gXCJjdWJlLVwiICsgdGhpcy5zY2VuZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAvL0N1YmXjgqrjg5bjgrjjgqfjgq/jg4jjgpLnp7vli5XjgZnjgotcbiAgICAgICAgICAgIGFkZE9iamVjdC5wb3NpdGlvbi54ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSkgLSA1O1xuICAgICAgICAgICAgYWRkT2JqZWN0LnBvc2l0aW9uLnkgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogNSkpIC0gMi41O1xuICAgICAgICAgICAgYWRkT2JqZWN0LnBvc2l0aW9uLnogPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMikpO1xuICAgICAgICAgICAgLy9DdWJl44Kq44OW44K444Kn44Kv44OI44KS5Zue6Lui44GV44Gb44KLXG4gICAgICAgICAgICBhZGRPYmplY3Qucm90YXRpb24ueCA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZChNYXRoLnJhbmRvbSgpICogNDUpO1xuICAgICAgICAgICAgYWRkT2JqZWN0LnJvdGF0aW9uLnkgPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoTWF0aC5yYW5kb20oKSAqIDQ1KTtcbiAgICAgICAgICAgIC8v44Kq44OW44K444Kn44Kv44OI44Gu44K344O844Oz44G444Gu6L+95YqgXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChhZGRPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgQSA9IChNYXRoLnJhbmRvbSgpICogMzApO1xuICAgICAgICAgICAgaWYgKEEgPCAxMCkge1xuICAgICAgICAgICAgICAgIGFkZE9iamVjdDMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoMTAgPD0gQSAmJiBBIDwgMjApIHtcbiAgICAgICAgICAgICAgICBhZGRjdWJlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZE9iamVjdDIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIGxldCBsdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkubm9ybWFsaXplKCk7XG4gICAgICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KGx2ZWMueCwgbHZlYy55LCBsdmVjLnopO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3ViZS5yb3RhdGVYKDAuMDEpO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gbmV3IFRocmVlSlNDb250YWluZXIoKTtcblxuICAgIGxldCB2aWV3cG9ydCA9IGNvbnRhaW5lci5jcmVhdGVSZW5kZXJlckRPTSg2NDAsIDQ4MCwgbmV3IFRIUkVFLlZlY3RvcjMoLTMsIDMsIDMpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbn1cbiovXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfdGhyZWVfZXhhbXBsZXNfanNtX2NvbnRyb2xzX09yYml0Q29udHJvbHNfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=