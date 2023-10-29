import React, { useState, useEffect } from 'react';
import SimplePeer from 'simple-peer';
import io from 'socket.io-client';

function VideoCall() {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [roomId, setRoomId] = useState(''); // Set your room ID here
  const socket = io('http://localhost:3001'); // Change the URL as needed

  useEffect(() => {
    const initializeVideoCall = async () => {
      try {
        // Get access to the user's camera and microphone
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setLocalStream(stream);

        // Join the room
        socket.emit('join-room', roomId);

        // Create a peer connection
        const peer = new SimplePeer({
          initiator: true,
          stream: stream,
        });

        // Handle offer creation
        peer.on('signal', (data) => {
          socket.emit('offer', { target: roomId, offer: data });
        });

        // Handle incoming answer
        socket.on('answer', (data) => {
          peer.signal(data);
        });

        // Handle incoming ICE candidates
        socket.on('ice-candidate', (data) => {
          peer.signal(data);
        });

        // Handle remote stream
        peer.on('stream', (stream) => {
          setRemoteStream(stream);
        });

        setPeer(peer);
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    initializeVideoCall();
  }, [roomId, socket]);

  return (
    <div>
      {localStream && (
        <video id="localVideo" autoPlay playsInline muted ref={(video) => (video.srcObject = localStream)} />
      )}
      {remoteStream && (
        <video id="remoteVideo" autoPlay playsInline ref={(video) => (video.srcObject = remoteStream)} />
      )}
    </div>
  );
}

export default VideoCall;
