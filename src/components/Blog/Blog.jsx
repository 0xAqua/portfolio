import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Blog.css'

const theme = createTheme({
    palette: {
        secondary: {
            main: '#000',
        },
    },
    zIndex: {
        mobileStepper: 1000,
    },
});
const Blog = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabContentsStyle = {
        padding: "14px",
        borderBottom: "1px solid #FFF",
    };
    const tabPanelStyle = {
        height: "100%",
        backgroundColor: "#00695f",
    }
    return (
    <section className="blog" id="blog">
        <div className="Container blogContainer">
            <div className="SectionTitle">
                <h2>Blog</h2>
            </div>
            <div className="tab">
            <ThemeProvider theme={theme}>
                <Box sx={{ width: "100%", height: "380px" }}>
                    <TabContext value={value}>
                        <Box>
                            <TabList
                                sx={{ typography: 'subtitle2' }}
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#a82871",
                                    height: "2px",
                                }
                                }}
                            >
                                <Tab label="Site"  value="1" />
                                <Tab label="Application" value="2" />
                                <Tab label="analysis" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" style={tabPanelStyle}>
                            <p style={tabContentsStyle}>Hello</p>
                            <p style={tabContentsStyle}>Hello</p>
                        </TabPanel>
                        <TabPanel value="2" style={tabPanelStyle}>
                            <p style={tabContentsStyle}>test</p>
                        </TabPanel>
                        <TabPanel value="3" style={tabPanelStyle}>
                            <p style={tabContentsStyle}>Hello World</p>
                        </TabPanel>
                    </TabContext>
                </Box>
            </ThemeProvider>
            </div>
        </div>
    </section>
    );
}

export default Blog
