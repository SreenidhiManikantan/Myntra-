### Updated JavaScript (vr-show.js)

Replace the URL in the loader.load function with the provided Ready Player Me avatar link.

javascript
let scene, camera, renderer, avatar;

function init() {
    // Set up the scene
    scene = new THREE.Scene();

    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 3);

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('vr-container').appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    // Load the Ready Player Me avatar
    const loader = new THREE.GLTFLoader();
    loader.load('https://models.readyplayer.me/66949cb41847c40762d06832.glb', function (gltf) {
        avatar = gltf.scene;
        avatar.position.set(0, 0, 0);
        scene.add(avatar);
    }, undefined, function (error) {
        console.error(error);
    });

    // Add VR support
    renderer.xr.enabled = true;
    document.body.appendChild(VRButton.createButton(renderer));

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    // Render the scene
    renderer.setAnimationLoop(render);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    renderer.render(scene, camera);
}

// Initialize the scene when the page loads
window.addEventListener('load', init);
