<?xml version='1.0'?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap">
  <xsl:output method="html"/>


  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>

  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'gxui.Splash'">
        <xsl:call-template name="RenderSplash"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- GxChart design render -->
  <xsl:template name="RenderSplash">
    <span atomicselection="true">
      <table>
          <TR>
            <TD>
            	<img>
					<xsl:attribute name="src">
						<xsl:value-of select='gxca:GetMyPath()'/>
						<xsl:text>\Splash\design\splash.jpg</xsl:text>
					</xsl:attribute>	  						
					<xsl:call-template name="AddStyleAttribute"/>
  				</img>               
            </TD>
          </TR>          
      </table>
    </span>    
  </xsl:template>

  <!-- Helpers Templates -->
  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Width')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Height')"/>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
    
  </xsl:template>
  
  
</xsl:stylesheet>