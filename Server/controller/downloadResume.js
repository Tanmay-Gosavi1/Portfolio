import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Function to handle resume download
export const DownloadResume = async (req, res) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, '../uploads/comingsoon.pdf');
        
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ 
                success: false,
                message: 'Resume file not found' 
            });
        }
        
        // Set custom filename for download
        const downloadName = 'Tanmay_Resume.pdf';
        
        // Set proper headers
        res.setHeader('Content-Disposition', `attachment; filename="${downloadName}"`);
        res.setHeader('Content-Type', 'application/pdf');
        
        // Download the file
        res.download(filePath, downloadName, (err) => {
            if (err) {
                console.error('Download error:', err);
                if (!res.headersSent) {
                    return res.status(500).json({ 
                        success: false,
                        message: 'Error downloading file' 
                    });
                }
            }
        });
        
    } catch (error) {
        console.error('Controller error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}
