import React from "react";
import "./profile.css";

const ProfileSubHeader = () => {
	return (
		<div>
			<div className="profile_header d-none d-lg-block">
				<h3 className="">Lengkapi info account</h3>
			</div>
			<div className="photo_section">
				<div className="dummy_dropzone">
					<img src="/SVG/camera.svg" className="camera_icon" alt="camera" />
				</div>
			</div>
		</div>
	);
};

export default ProfileSubHeader;
